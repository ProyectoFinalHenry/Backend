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
import { validateAdmin } from "../middlewares/admin.js";
const coffeeRouter = Router();

coffeeRouter
  .get("/", validateQuery, getCoffees)
  .get("/:id", validateId, getCoffeeById)
  .post("/", validateAdmin, validatePost, postCoffee) //agregar validacion de admin
  .post("/upload", postUploadCoffeAsset)
  .put("/:id",validateAdmin, validateId, validatePut, updateCoffee) //agregar validacion de admin
  .delete("/:id", validateId, deleteCoffee); //agregar validacion de admin

export default coffeeRouter;
