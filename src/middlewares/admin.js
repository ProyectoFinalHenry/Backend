import { header } from "express-validator";
import validate from "../utils/validateResults.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import sequelize from "../db.js";
dotenv.config();
const { Role } = sequelize.models;

export const validateAdmin = [
    header("auth_token")
      .exists({ values: "falsy" })
      .trim()
      .notEmpty()
      .custom(async (value, { req }) => {
        const [bearer, token] = value.split(" ");
        if (!bearer || bearer !== "Bearer" || !token)
          throw new Error("Invalid token format");
  
        const { role } = jwt.verify(token, process.env.SECRET_KEY);
        if (!role) throw new Error("There was an error processing token");
        
        const user = await Role.findByPk(role);
        if(user.role === "user") throw new Error("You do not have access");
  
        req.userId = id;
      }),
    (req, res, next) => {
      validate(req, res, next);
    },
  ];