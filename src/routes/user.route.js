import express from "express";
import { getUser, updateUser, createUser, deleteUser, getUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", async (req,res) => {
    const users = await getUsers();
    res.status(200).json(users);
});

router.post("/", async (req,res) => {
    const user = await createUser(req.body);
    res.status(200).json(user);
});

router.get("/:id", async (req,res) => {
    const user = await getUser(req.params.id);
    res.status(200).json(user);
});

router.put("/:id", async (req,res) => {
   
    const user = await updateUser(req.params.id, req.body);
    res.status(200).json(user);
});

router.delete("/:id", async (req,res) => {
    console.log(req.params)
    const user = await deleteUser(req.params.id);
    res.status(200).json(user);
});

export default router;