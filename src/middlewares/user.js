import { body, cookie } from "express-validator";
import validate from "../utils/validateResults.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const validateSignup = [
  body("name")
    .exists({ values: "falsy" })
    .isAlphanumeric()
    .notEmpty()
    .isLength({
      min: 2,
      max: 20,
    }),
  body("email")
    .exists({ values: "falsy" })
    .trim()
    .notEmpty()
    .isEmail()
    .escape(),
  body("password")
    .exists({ values: "falsy" })
    .trim()
    .notEmpty()
    .escape(),
  body("image").optional().trim().notEmpty().isURL(),
  (req, res, next) => {
    validate(req, res, next);
  },
];

export const validateLogin = [
  body("email")
    .exists({ values: "falsy" })
    .trim()
    .notEmpty()
    .isEmail()
    .escape(),
  body("password")
    .exists({ values: "falsy" })
    .trim()
    .notEmpty()
    .escape(),
  (req, res, next) => {
    validate(req, res, next);
  },
];

export const validateUser = [
  cookie("Authorization")
    .exists({ values: "falsy" })
    .trim()
    .notEmpty()
    .custom(async (value, { req }) => {
      const [bearer, token] = value.split(" ");
      if (!bearer || bearer !== "Bearer")
        throw new Error("Invalid token format");

      const { id } = jwt.verify(token, process.env.SECRET_KEY);
      if (!id) throw new Error("there was an error processing token");

      req.userId = id;
    }),
  (req, res, next) => {
    validate(req, res, next);
  },
];

export const validateUpdate = [
  body("id").not().exists(),
  body("password").not().exists(),
  body("isActive").not().exists(),
  body("name").optional().isAlphanumeric().notEmpty().isLength({
    min: 2,
    max: 20,
  }),
  body("email").optional().trim().notEmpty().isEmail().escape(),
  body("image").optional().trim().notEmpty().isURL(),
  (req, res, next) => {
    validate(req, res, next);
  },
];
