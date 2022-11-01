import Tweet from '../models/tweet.model';

export async function createTweet(body) {
    const { text, userId } = body;
    
    const tweet = await Tweet.create({
        text,
        userId,
    });
    return tweet;
}

export async function getTweet(id) {
    const tweet = await Tweet.findById(id);
    
    return tweet;
}

export async function updateTweet(id, body) {
    const text = body.text;
    const tweet = await Tweet.findByIdAndUpdate(id, {
        text
    });
    return tweet;
}

export async function deleteTweet(id) {
    const tweet = await Tweet.findByIdAndDelete(id);
    return tweet;
}

export async function getTweets(query) {
    const tweets = await Tweet.find();
    
    return tweets;
}

export async function getTweetsByUser(userId) {
    const tweets = await Tweet.find({ userId });
    
    return tweets;
}

export async function getTweetsByUserAndText(userId, text) {
    const tweets = await Tweet.find({ userId, text });
    
    return tweets;
}


