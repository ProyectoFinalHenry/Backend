import { body, param } from "express-validator";
import validate from "../utils/validateResults.js";

export const validateId = [
  param("id").trim().notEmpty().isUUID("4"),
  (req, res, next) => {
    validate(req, res, next);
  },
];

// export const validateQuery = [
//   query("typeOfCoffee").optional().isIn([1, 2, 3]),
//   query("origin").optional().isIn([1, 2]),
//   query("roastingProfile").optional().isIn([1, 2, 3]),
//   query("name").optional().trim().notEmpty().escape(),
//   (req, res, next) => {
//     validate(req, res, next);
//   },
// ];

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
    "Café en grano entero",
    "Café molido",
    "Café en cápsula",
    "Café instantáneo",
  ]),
  body("origin").isIn(["Café de origen único", "Mezcla de Café"]),
  body("roastingProfile").isIn([
    "Tostado ligero",
    "Tostado medio",
    "Tostado oscuro",
  ]),
  (req, res, next) => {
    validate(req, res, next);
  },
];

export const validatePut = [
  body("defaultCoffee")
    .optional()
    .custom((value, { req }) => {
      const { id, name, description, image, price, stock, isActive } = value;
      if (id) throw new Error("El id no debe actualizarse");
      if (!name && !description && !image && !price && !stock && !isActive)
        throw new Error("defaultCoffee no tiene informacion relevante");
      return true;
    }),
  body("categoryCoffee")
    .optional()
    .custom((value, { req }) => {
      const { roastingProfile, typeOfCoffee, origin } = value;
      if (!roastingProfile && !typeOfCoffee && !origin)
        throw new Error("categoryCoffee no tiene informacion relevante");
      return true;
    }),
  (req, res, next) => {
    validate(req, res, next);
  },
];
