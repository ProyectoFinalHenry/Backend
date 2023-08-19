import { Router } from "express";
import {
  getCoffees,
  getCoffeeById,
  postCoffee,
  updateCoffee,
  deleteCoffee,
} from "../handlers/handlerCoffee.js";
import {
  validateId,
  validateQuery,
  validatePost,
  validatePut,
} from "../middlewares/coffee.js";

const coffeeRouter = Router();

coffeeRouter
  .get("/", validateQuery, getCoffees)
  .get("/:id", validateId, getCoffeeById)
  .post("/", validatePost, postCoffee)
  .put("/:id", validateId, validatePut, updateCoffee)
  .delete("/:id", validateId, deleteCoffee);

export default coffeeRouter;
