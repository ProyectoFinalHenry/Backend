import { Router } from "express";
import {
  getCoffees,
  getCoffeeById,
  postCoffee,
  postUploadCoffeAsset,
  updateCoffee,
  deleteCoffee,
  getTypesOfCoffee,
  getOriginsOfCoffee,
  getRoastProfileOfCoffee
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
  .get("/types", getTypesOfCoffee)
  .get("/roasts", getRoastProfileOfCoffee)
  .get("/origins", getOriginsOfCoffee)
  .get("/:id", validateId, getCoffeeById)
  .post("/", validatePost, postCoffee)
  .post("/upload", postUploadCoffeAsset)
  .put("/:id", validateId, validatePut, updateCoffee)
  .delete("/:id", validateId, deleteCoffee);

export default coffeeRouter;
