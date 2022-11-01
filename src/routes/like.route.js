import express from "express";
import { createLike, getLikesByUser, getLikesByPost, deleteLike} from "../controllers/like.controller";

const router = express.Router();

router.post("/", async (req,res) => {
    const like = await createLike(req.body);
    res.status(200).json(like);
});

router.get("/user/:id", async (req,res) => {
    const likes = await getLikesByUser(req.params.id);
    res.status(200).json(likes);
});

router.get("/post/:id", async (req,res) => {
    const likes = await getLikesByPost(req.params.id);
    res.status(200).json(likes);
});

router.delete("/:id", async (req,res) => {
    const like = await deleteLike(req.params.id);
    res.status(200).json(like);
});


export default router;
