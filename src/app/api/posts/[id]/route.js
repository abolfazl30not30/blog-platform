import clientPromise from '../../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(request, { params }) {
    const client = await clientPromise;
    const db = client.db('blog');
    const { id } = params;
    const post = await db.collection('posts').findOne({ _id: new ObjectId(id) });
    return new Response(JSON.stringify(post), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function PUT(request, { params }) {
    const client = await clientPromise;
    const db = client.db('blog');
    const { id } = params;
    const updatedPost = await request.json();
    await db.collection('posts').updateOne({ _id: new ObjectId(id) }, { $set: updatedPost });
    return new Response(JSON.stringify({ message: 'Post updated' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function DELETE(request, { params }) {
    const client = await clientPromise;
    const db = client.db('blog');
    const { id } = params;
    await db.collection('posts').deleteOne({ _id: new ObjectId(id) });
    return new Response(JSON.stringify({ message: 'Post deleted' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
