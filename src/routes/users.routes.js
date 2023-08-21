import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  login,
  updateUser,
} from "../controllers/users.controllers";
import validateUser from "../helpers/userValidation";

const router = Router();

router.route("/users").get(getUsers).post(validateUser, login);
router.route("/newUser").post(validateUser, createUser);
router
  .route("/users/:id")
  .get(getUserById)
  .put(validateUser, updateUser)
  .delete(deleteUser);

export default router;
