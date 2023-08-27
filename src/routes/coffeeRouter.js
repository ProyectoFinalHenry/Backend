import { Router } from "express";
import {
  getCoffees,
  getCoffeeById,
  postCoffee,
  postUploadCoffeAsset,
  updateCoffee,
  deleteCoffee,
} from "../handlers/handlerCoffee.js";
import {
  validateQuery,
  validateId,
  validatePost,
  validatePut,
} from "../middlewares/coffee.js";

const coffeeRouter = Router();

coffeeRouter
  .get("/", validateQuery, getCoffees)
  .get("/:id", validateId, getCoffeeById)
  .post("/", validatePost, postCoffee) //agregar validacion de admin
  .post("/upload", postUploadCoffeAsset)
  .put("/:id", validateId, validatePut, updateCoffee) //agregar validacion de admin
  .delete("/:id", validateId, deleteCoffee); //agregar validacion de admin

export default coffeeRouter;
