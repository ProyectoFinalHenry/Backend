import { body, header } from "express-validator";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import validate from "../utils/validateResults.js";
dotenv.config();

export const validateUser = [
  header("auth_token")
    .exists({ values: "falsy" })
    .trim()
    .notEmpty()
    .custom(async (value, { req }) => {
      const [bearer, token] = value.split(" ");
      if (!bearer || bearer !== "Bearer" || !token)
        throw new Error("Invalid token format");

      const { id } = jwt.verify(token, process.env.SECRET_KEY);

      req.userId = id;
    }),
  (req, res, next) => {
    validate(req, res, next);
  },
];

export const validateCoffee = [
  body("coffeeId").exists({ values: "falsy" }).trim().notEmpty().isUUID("4"),
  (req, res, next) => {
    validate(req, res, next);
  },
];

export const validateReview = [
  body("comments").exists().trim().notEmpty().escape(),
  body("rating").isInt({ min: 1, max: 5 }),
  (req, res, next) => {
    validate(req, res, next);
  },
];
