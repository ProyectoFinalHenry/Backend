import { Router } from "express";
import { addProductToCart, deleteProductToCart } from "../handlers/handlerCart";
import { validateAdd, validateDelete} from "../middlewares/cart.js";
const cartRouter = Router();

cartRouter
        .post("/add", validateAdd, addProductToCart)
        .post("/delete", validateDelete, deleteProductToCart)

export default cartRouter;