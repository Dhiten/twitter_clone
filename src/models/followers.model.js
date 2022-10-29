import mongoose from 'mongoose'

const followerSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    follower: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    created_at: { type: Date, default: Date.now }
});

export default mongoose.model('follower', followerSchema);