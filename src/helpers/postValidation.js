import { check } from "express-validator";
import validationRes from "./validationResult";

const validatePost = [
  check("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 5, max: 50 })
    .withMessage("Title must be between 5 and 50 characters"),
  ,
  check("content")
    .notEmpty()
    .withMessage("Content is required")
    .isLength({ min: 5, max: 100 })
    .withMessage("Title must be between 5 and 100 characters"),
  ,
  check("userId").notEmpty().withMessage("User ID is required"),
  (req, res, next) => {
    validationRes(req, res, next);
  },
];

export default validatePost;
