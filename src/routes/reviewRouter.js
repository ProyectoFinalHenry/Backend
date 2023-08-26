import { Router } from "express";
import { addReview, removeReview } from "../handlers/handlerReview.js";
import {
  validateUser,
  validateCoffee,
  validateReview,
} from "../middlewares/review.js";

const reviewRouter = Router();

reviewRouter
  .post("/add", validateUser, validateCoffee, validateReview, addReview)
  .delete("/delete", validateUser, validateCoffee, removeReview);

export default reviewRouter;
