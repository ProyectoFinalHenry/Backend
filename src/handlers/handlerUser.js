import {
  newUser,
  authentication,
  validationEmail,
  passwordResetEmail,
  validator,
  passwordReset,
  getData,
  update,
  remove,
} from "../controllers/controllerUser.js";

export const signup = async (req, res) => {
  try {
    const token = await newUser(req.body);
    res.status(200).json({ auth_token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const token = await authentication(req.body);
    res.status(200).json({ auth_token: `Bearer ${token}` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const resendValidationEmail = async (req, res) => {
  try {
    const status = await validationEmail(req.body);
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const resendPasswordResetEmail = async (req, res) => {
  try {
    const status = await passwordResetEmail(req.body);
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ error: error.mesage });
  }
};

export const activator = async (req, res) => {
  try {
    await validator(req.params);
    res.redirect("http://granodeoro.vercel.app/");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const status = await passwordReset(req.body);
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await getData(req.userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const status = await update(req.userId, req.body);
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const status = await remove(req.userId);
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
