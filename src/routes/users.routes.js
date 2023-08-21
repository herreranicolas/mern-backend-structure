import { Router } from "express";
import { createUser, getUsers } from "../controllers/users.controllers";

const router = Router();

router.route("/users").get(getUsers).post(createUser);

export default router;
