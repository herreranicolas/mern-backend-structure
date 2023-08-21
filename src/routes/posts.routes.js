import { Router } from "express";
import { createPost, getPosts } from "../controllers/posts.controllers";

const router = Router();

router.route("/posts").get(getPosts).post(createPost);

export default router;
