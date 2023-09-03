import { Router } from "express";
import { login, getAllUsers, activeUser, getSales } from "../handlers/handlerAdmin.js";
const adminRouter = Router();

adminRouter
    .get("/user", getAllUsers)
    .get("/data/sales", getSales)
    .put("/user/status", activeUser)
    .post("/login", login)

export default adminRouter;