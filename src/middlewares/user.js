import { body, param, header } from "express-validator";
import validate from "../utils/validateResults.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const validateSignup = [
  body("name")
    .exists({ values: "falsy" })
    .trim()
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
  body("password").exists({ values: "falsy" }).trim().notEmpty().escape(),
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
  body("password").exists({ values: "falsy" }).trim().notEmpty().escape(),
  (req, res, next) => {
    validate(req, res, next);
  },
];

export const validateId = [
  param("id").trim().notEmpty().isUUID("4"),
  (req, res, next) => {
    validate(req, res, next);
  },
];

export const validateEmail = [
  body("email")
    .exists({ values: "falsy" })
    .trim()
    .notEmpty()
    .isEmail()
    .escape(),
  (req, res, next) => {
    validate(req, res, next);
  },
];

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
      if (!id) throw new Error("there was an error processing token");

      req.userId = id;
    }),
  (req, res, next) => {
    validate(req, res, next);
  },
];

export const validateUpdate = [
  body("id").not().exists(),
  body("isActive").not().exists(),
  body("validated").not().exists(),
  body("password").not().exists(),
  body("localRegistration").not().exists(),
  body("resetToken").not().exists(),
  (req, res, next) => {
    validate(req, res, next);
  },
];

export const validateResetPassword = [
  body("token").exists({ values: "falsy" }).trim().notEmpty(),
  body("newPassword").exists({ values: "falsy" }).trim().notEmpty().escape(),
  (req, res, next) => {
    validate(req, res, next);
  },
];
