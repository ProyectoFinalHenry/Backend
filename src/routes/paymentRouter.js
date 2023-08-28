import { Router } from "express";
import { paymentService } from "../handlers/handlerPayment.js";
import { validateUser } from "../middlewares/payment.js";

const paymentRouter = Router();

paymentRouter
    .get("/createOrder", validateUser, paymentService)

export default paymentRouter;