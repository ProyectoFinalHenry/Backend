import { query, body, param } from "express-validator";
import validate from "../utils/validateResults.js";

export const validateId = [
  param("id").trim().notEmpty().isUUID("4"),
  (req, res, next) => {
    validate(req, res, next);
  },
];

export const validateQuery = [
  query("typeOfCoffee").optional().isIn([1, 2, 3]),
  query("origin").optional().isIn([1, 2]),
  query("roastingProfile").optional().isIn([1, 2, 3]),
  query("name").optional().trim().notEmpty().escape(),
  (req, res, next) => {
    validate(req, res, next);
  },
];

export const validatePost = [
  body("name")
    .exists({ values: "falsy" })
    .trim()
    .notEmpty()
    .isString()
    .escape(),
  body("description").exists({ values: "falsy" }).trim().notEmpty().escape(),
  body("image").exists({ values: "falsy" }).trim().notEmpty().isURL(),
  body("price").exists({ values: "falsy" }).isFloat({
    min: 1,
  }),
  body("stock").exists({ values: "falsy" }).isInt({
    min: 1,
  }),
  body("typeOfCoffee").isIn([
    "Whole bean coffee",
    "Ground coffee",
    "Capsule coffee",
    "Instant coffee",
  ]),
  body("origin").isIn(["Single Origin Coffee", "Blend of Coffee"]),
  body("roastingProfile").isIn(["Light Roast", "Medium Roast", "Dark Roast"]),
  (req, res, next) => {
    validate(req, res, next);
  },
];

export const validatePut = [
  body("defaultCoffee")
    .optional()
    .custom((value, { req }) => {
      const { id, name, description, image, price, stock, isActive } = value;
      if (id) throw new Error("id should not be updated");
      if (!name && !description && !image && !price && !stock && !isActive)
        throw new Error("defaultCoffee has no relevant information");
      return true;
    }),
  body("categoryCoffee")
    .optional()
    .custom((value, { req }) => {
      const { roastingProfile, typeOfCoffee, origin } = value;
      if (!roastingProfile && !typeOfCoffee && !origin)
        throw new Error("categoryCoffee has no relevant information");
      return true;
    }),
  (req, res, next) => {
    validate(req, res, next);
  },
];
[, , "Dark Roast"];
