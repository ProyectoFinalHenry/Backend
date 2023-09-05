import { Router } from "express";
import { getAll } from "../handlers/handlerOrder.js";
//import { validateUser } from "../middlewares/payment.js";

const orderRouter = Router();

orderRouter
  .get("/", getAll)

export default orderRouter;
