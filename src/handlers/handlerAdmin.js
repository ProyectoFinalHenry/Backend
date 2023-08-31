import {
  authentication,
  changeStatus,
  getUsers,
} from "../controllers/controllerAdmin.js";

export const login = async (req, res) => {
  try {
    const token = await authentication(req.body);
    res.status(200).json(token);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const activeUser = async (req, res) => {
  try {
    const status = await changeStatus(req.body);
    res.status(200).json(status);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
