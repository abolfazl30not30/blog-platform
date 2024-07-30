import { MongoClient } from 'mongodb';
import { createMocks } from 'node-mocks-http';
import { GET } from 'src/app/api/posts/route';

describe('GET /api/posts', () => {
    let connection;
    let db;

    beforeAll(async () => {
        const { MongoMemoryServer } = require('mongodb-memory-server');
        const mongod = await MongoMemoryServer.create();
        const uri = mongod.getUri();

        connection = await MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db = await connection.db();
    });

    afterAll(async () => {
        await connection.close();
        await db.close();
    });

    it('returns all posts', async () => {
        const posts = db.collection('posts');

        await posts.insertOne({ title: 'Test Post', content: 'Test Content' });

        const { req, res } = createMocks({
            method: 'GET',
        });

        req.db = db;

        await GET(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(JSON.parse(res._getData())).toEqual([
            expect.objectContaining({
                title: 'Test Post',
                content: 'Test Content',
            }),
        ]);
    });

    it('returns an empty array if no posts', async () => {
        const { req, res } = createMocks({
            method: 'GET',
        });

        req.db = db;

        await GET(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(JSON.parse(res._getData())).toEqual([]);
    });
});
