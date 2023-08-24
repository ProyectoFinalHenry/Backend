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

  .get("/ping", (req, res, next) => {
    res.cookie("Authorization", `Bearer `, {
      maxAge: 43200000,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.send("ok")
  })

export default userRouter;
