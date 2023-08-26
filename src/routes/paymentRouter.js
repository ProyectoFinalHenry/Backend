import { Router } from "express";
import { createOrder } from "../controllers/controllerPayment.js";

const router = Router();

router.post("/create-order", createOrder);
router.get("/success", (req, res) => res.send("success"));
router.get("/webhook", (req, res) => res.send("webhook"));

export default router;
