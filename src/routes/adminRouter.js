import { Router } from "express";
import { login, getAllUsers, activeUser } from "../handlers/handlerAdmin.js";
const adminRouter = Router();

adminRouter
    .get("/user", getAllUsers)
    .put("/user/status", activeUser)
    .post("/login", login)

export default adminRouter;