import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: { type: String},
    age: Number,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

//create schema for twitter user

export default mongoose.model('user', userSchema);
