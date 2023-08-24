import { Router } from "express";
import {
  addProductToCart,
  deleteProductToCart,
  getProductsToCart,
} from "../handlers/handlerCart.js";
import {
  validateAdd,
  validateToken,
  validateDelete,
} from "../middlewares/cart.js";
const cartRouter = Router();

cartRouter
  .get("/", validateToken, getProductsToCart)
  .post("/add", validateToken, validateAdd, addProductToCart)
  .delete("/delete", validateDelete, deleteProductToCart);

export default cartRouter;
