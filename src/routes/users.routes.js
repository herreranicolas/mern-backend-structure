import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/users.controllers";
import validateUser from "../helpers/userValidation";

const router = Router();

router.route("/users").get(getUsers).post(validateUser, createUser);
router
  .route("/users/:id")
  .get(getUserById)
  .put(validateUser, updateUser)
  .delete(deleteUser);

export default router;
