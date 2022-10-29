import mongoose from 'mongoose'

const likeSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    tweet: { type: mongoose.Schema.Types.ObjectId, ref: 'tweet' },
    created_at: { type: Date, default: Date.now }
});

export default mongoose.model('like', likeSchema);