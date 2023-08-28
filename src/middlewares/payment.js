import { header } from "express-validator";
import jwt from "jsonwebtoken";
import validate from "../utils/validateResults.js";

export const validateUser = [
    header("auth_token")
      .exists({ values: "falsy" })
      .trim()
      .notEmpty()
      .custom(async (value, { req }) => {
        const [bearer, token] = value.split(" ");
        if (!bearer || bearer !== "Bearer" || !token)
          throw new Error("Invalid token format");
  
        const { id } = jwt.verify(token, process.env.SECRET_KEY);
        if (!id) throw new Error("there was an error processing token");
  
        req.userId = id;
      }),
    (req, res, next) => {
      validate(req, res, next);
    },
  ];