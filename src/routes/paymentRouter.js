import { Router } from "express";
import { paymentService, webhook } from "../handlers/handlerPayment.js";
import { validateUser } from "../middlewares/payment.js";

const paymentRouter = Router();

paymentRouter
  .get("/createOrder", validateUser, paymentService)
  .post("/webhook", webhook);

export default paymentRouter;
