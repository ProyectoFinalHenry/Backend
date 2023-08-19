import { Router } from "express";
import {
  signup,
  login,
  logout,
  getUser,
  updateUser,
  deleteUser,
} from "../handlers/handlerUser.js";
import { validateSignup, validateLogin, validateUser, validateUpdate } from "../middlewares/user.js";

const userRouter = Router();

userRouter
  .get("/", validateUser, getUser)
  .get("/logout", logout)
  .post("/signup", validateSignup, signup)
  .post("/login", validateLogin, login)
  .put("/updateData", validateUser, validateUpdate, updateUser)
  .delete("/", validateUser, deleteUser);

export default userRouter;
