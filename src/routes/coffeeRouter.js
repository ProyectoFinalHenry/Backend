import { Router } from "express";
import {
  getCoffees,
  getCoffeeById,
  postCoffee,
  updateCoffee,
  deleteCoffee,
} from "../handlers/handlerCoffee.js";

const coffeeRouter = Router();

coffeeRouter
  .get("/", getCoffees)
  .get("/:id", getCoffeeById)
  .post("/", postCoffee)
  .put("/:id", updateCoffee)
  .delete("/:id", deleteCoffee);

export default coffeeRouter;
