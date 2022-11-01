import Followers from '../models/followers.model';

export async function createFollower(body) {
    const { userId, followerId } = body;
    
    const follower = await Followers.create({
        userId,
        followerId,
    });
    return follower;
}

export async function getFollower(id) {
    const follower = await Followers.findById(id);
    
    return follower;
}   

export async function deleteFollower(id) {
    const follower = await Followers.findByIdAndDelete(id);
    return follower;
}

export async function getFollowers(query) {
    const followers = await Followers.find();
    
    return followers;
}

export async function getFollowersByUser(userId) {
    const followers = await Followers.find({ userId });
    
    return followers;
}

export async function getFollowersByFollower(followerId) {
    const followers = await Followers.find({ followerId });
    
    return followers;
}



