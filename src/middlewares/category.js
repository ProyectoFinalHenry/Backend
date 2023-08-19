import { param } from "express-validator";
import validate from "../utils/validateResults.js";

export const validateCategory = [
  param("category").isIn(["TypeOfCoffee", "RoastingProfile", "Origin"]),
  (req, res, next) => {
    validate(req, res, next);
  },
];
