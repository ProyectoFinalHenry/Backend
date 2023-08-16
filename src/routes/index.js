import { Router } from "express";
import coffeeRouter from "./coffeeRouter.js";
import categoryRouter from "./categoryRouter.js";

const router = Router();

router.use("/coffee", coffeeRouter);
router.use("/category", categoryRouter);

export default router;
