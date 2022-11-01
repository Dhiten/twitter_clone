import express from "express";  // import express
import { createFollower, getFollowersByFollower, getFollowersByUser, deleteFollower} from "../controllers/followers.controller";

const router = express.Router(); // create a router

router.post("/", async (req,res) => { // create a post route
    const follower = await createFollower(req.body); // create a follower
    res.status(200).json(follower); // return the follower
});

router.get("/user/:id", async (req,res) => { // create a get route
    const followers = await getFollowersByUser(req.params.id); // get the followers by user
    res.status(200).json(followers); // return the followers
});

router.get("/follower/:id", async (req,res) => { // create a get route
    const followers = await getFollowersByFollower(req.params.id); // get the followers by follower
    res.status(200).json(followers); // return the followers
});

router.delete("/:id", async (req,res) => { // create a delete route
    const follower = await deleteFollower(req.params.id); // delete the follower
    res.status(200).json(follower); // return the follower
});

export default router; // export the router
