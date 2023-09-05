import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import coffeeRouter from "./coffeeRouter.js";
import categoryRouter from "./categoryRouter.js";
import userRouter from "./userRouter.js";
import cartRouter from "./cartRouter.js";
import orderRouter from "./orderRouter.js";
import reviewRouter from "./reviewRouter.js";
import paymentRouter from "./paymentRouter.js";
import adminRouter from "./adminRouter.js";
import swaggerSpec from "../utils/swaggerSpec.js";

const router = Router();

router.use("/coffee", coffeeRouter);
router.use("/category", categoryRouter);
router.use("/user", userRouter);
router.use("/cart", cartRouter);
router.use("/review", reviewRouter);
router.use("/payment", paymentRouter);
router.use("/order", orderRouter);
router.use("/management", adminRouter);
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;
