import { Router } from "express";
import {
  signup,
  login,
  resendValidationEmail,
  resendPasswordResetEmail,
  activator,
  resetPassword,
  getUser,
  updateUser,
  deleteUser,
} from "../handlers/handlerUser.js";
import {
  validateSignup,
  validateLogin,
  validateId,
  validateEmail,
  validateUser,
  validateUpdate,
  validateResetPassword,
} from "../middlewares/user.js";

const userRouter = Router();

userRouter
  .get("/", validateUser, getUser)
  .get("/validate/:id", validateId, activator)
  .post("/signup", validateSignup, signup)
  .post("/login", validateLogin, login)
  .post("/send/validation", validateEmail, resendValidationEmail)
  .post("/send/restorePassword", validateEmail, resendPasswordResetEmail)
  .post("/resetPassword", validateResetPassword, resetPassword)
  .put("/updateData", validateUser, validateUpdate, updateUser)
  .delete("/", validateUser, deleteUser)

export default userRouter;
