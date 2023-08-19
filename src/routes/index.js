import { Router } from "express";
import coffeeRouter from "./coffeeRouter.js";
import categoryRouter from "./categoryRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use("/coffee", coffeeRouter);
router.use("/category", categoryRouter);
router.use("/user", userRouter);

export default router;
