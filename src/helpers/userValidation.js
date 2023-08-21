import { check } from "express-validator";
import validationRes from "./validationResult";

const validateUser = [
  check("email")
    .isEmail()
    .withMessage("Invalid email address")
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/)
    .withMessage("Invalid email format"),
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/)
    .withMessage(
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit"
    ),
  (req, res, next) => {
    validationRes(req, res, next);
  },
];

export default validateUser;
