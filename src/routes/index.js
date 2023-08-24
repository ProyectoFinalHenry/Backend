import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import coffeeRouter from "./coffeeRouter.js";
import categoryRouter from "./categoryRouter.js";
import userRouter from "./userRouter.js";
import cartRouter from "./cartRouter.js";
import swaggerSpec from "../utils/swaggerSpec.js";

const router = Router();

router.use("/coffee", coffeeRouter);
router.use("/category", categoryRouter);
router.use("/user", userRouter);
router.use("/cart", cartRouter)
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;
