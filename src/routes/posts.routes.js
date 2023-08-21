import { Router } from "express";
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from "../controllers/posts.controllers";
import validatePost from "../helpers/postValidation";
import validateJWT from "../helpers/token-verify";

const router = Router();

router
  .route("/posts")
  .get(getPosts)
  .post([validateJWT, validatePost], createPost);
router
  .route("/posts/:id")
  .get(getPostById)
  .put([validateJWT, validatePost], updatePost)
  .delete(validateJWT, deletePost);

export default router;
