import { validationResult } from "express-validator";

const validate = (req, res, next) => {
  try {
    validationResult(req).throw();
    next();
  } catch (error) {
    res.status(403).json({ errors: error.array() });
  }
};

export default validate;
