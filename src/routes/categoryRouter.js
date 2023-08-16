import { Router } from "express";
import getCategorys from "../handlers/handlerCategory.js";

const categoryRouter = Router();

categoryRouter.get("/:category", getCategorys);

export default categoryRouter;
