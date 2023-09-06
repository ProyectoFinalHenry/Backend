import { Router } from "express";
import {
  login,
  getAllUsers,
  activeUser,
  getSales,
} from "../handlers/handlerAdmin.js";
import { validateAdmin } from "../middlewares/admin.js";
const adminRouter = Router();

adminRouter
  .get("/user",validateAdmin, getAllUsers)
  .get("/data",validateAdmin, getSales)
  .put("/user/status/:userId",validateAdmin, activeUser)
  .post("/login", login);

export default adminRouter;
