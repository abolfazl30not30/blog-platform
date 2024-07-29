import clientPromise from '../../../lib/mongodb';

export async function GET(request) {
    const client = await clientPromise;
    const db = client.db('blog');
    const posts = await db.collection('posts').find({}).toArray();
    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function POST(request) {
    const client = await clientPromise;
    const db = client.db('blog');
    const post = await request.json();
    await db.collection('posts').insertOne(post);
    return new Response(JSON.stringify({ message: 'Post created' }), {
        status: 201,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
