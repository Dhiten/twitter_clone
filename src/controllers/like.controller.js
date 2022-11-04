import Like from '../models/like.model';

export async function createLike(body) {
    const { tweetId, userId } = body;
    
    const like = await Like.create({
        tweetId,
        userId,
    });
    const tweet = await Like.findById(tweetId);
    tweet.likes += 1;
    await tweet.save();
    return like;
}

export async function getLike(id) {
    const like = await Like.findById(id);
    
    return like;
}   

export async function deleteLike(id) {
    const like = await Like.findByIdAndDelete(id);
    return like;
}

export async function getLikes(query) {
    const likes = await Like.find();
    
    return likes;
}

export async function getLikesByUser(userId) {
    const likes = await Like.find({ userId });
    
    return likes;
}

export async function getLikesByTweet(tweetId) {
    const likes = await Like.find({ tweetId });
    
    return likes;
}

export async function getLikesByTweetAndUser(tweetId, userId) {
    const likes = await Like.find({ tweetId, userId });
    
    return likes;
}  
