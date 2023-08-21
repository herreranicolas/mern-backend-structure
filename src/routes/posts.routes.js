import { Router } from "express";
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from "../controllers/posts.controllers";
import validatePost from "../helpers/postValidation";

const router = Router();

router.route("/posts").get(getPosts).post(validatePost, createPost);
router
  .route("/posts/:id")
  .get(getPostById)
  .put(validatePost, updatePost)
  .delete(deletePost);

export default router;
