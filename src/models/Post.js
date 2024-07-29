import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title for the post.'],
        maxlength: [40, 'Title cannot be more than 40 characters'],
    },
    content: {
        type: String,
        required: [true, 'Please provide content for the post.'],
    },
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
