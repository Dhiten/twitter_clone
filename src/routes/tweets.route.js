import express from "express";
import { getTweets, createTweet, getTweet, updateTweet, deleteTweet } from "../controllers/tweet.controller.js";

const router = express.Router();

router.get("/", async (req,res) => {
    const tweets = await getTweets();
    res.status(200).json(tweets);
});

router.post("/", async (req,res) => {
    const tweet = await createTweet(req.body);
    res.status(200).json(tweet);
});

router.get("/:id", async (req,res) => {
    const tweet = await getTweet(req.params.id);
    res.status(200).json(tweet);
});

router.put("/:id", async (req,res) => {
    const tweet = await updateTweet(req.params.id, req.body);
    res.status(200).json(tweet);
});

router.delete("/:id", async (req,res) => {
    const tweet = await deleteTweet(req.params.id);
    res.status(200).json(tweet);
});

export default router;