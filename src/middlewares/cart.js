import { body } from "express-validator";
import validate from "../utils/validateResults";

export const validateAdd = [
  body("userId").trim().notEmpty().isUUID("4"),
  body("productId").trim().notEmpty().isUUID("4"),
  body("quantity").isNumeric(),
  (req, res, next) => {
    validate(req, res, next);
  },
];

export const validateDelete = [
    body("cartId").trim().notEmpty().isUUID("4"),
    (req, res, next) => {
      validate(req, res, next);
    },
  ];
