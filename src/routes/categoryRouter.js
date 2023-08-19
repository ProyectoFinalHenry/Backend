import { Router } from "express";
import getCategorys from "../handlers/handlerCategory.js";
import { validateCategory } from "../middlewares/category.js";

const categoryRouter = Router();

categoryRouter.get("/:category", validateCategory, getCategorys);

export default categoryRouter;
