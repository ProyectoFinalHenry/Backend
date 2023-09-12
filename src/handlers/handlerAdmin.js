import {
  authentication,
  changeStatus,
  getUsers,
  getData,
} from "../controllers/controllerAdmin.js";

export const login = async (req, res) => {
  try {
    const token = await authentication(req.body);
    res.status(200).json({ auth_token: `Bearer ${token}` });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers(req.query);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const activeUser = async (req, res) => {
  try {
    const { userId } = req.params; // le agregue el ID
    const status = await changeStatus({ userId });
    res.status(200).json(status);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getSales = async (req, res) => {
  try {
    const data = await getData();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}
