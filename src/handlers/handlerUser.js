import {
  newUser,
  authentication,
  getData,
  update,
  remove,
} from "../controllers/controllerUser.js";

export const signup = async (req, res) => {
  try {
    const token = await newUser(req.body);
    res.cookie("Authorization", `Bearer ${token}`, {
      maxAge: 43200000,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    res.status(200).json({ status: "Signup successful" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const token = await authentication(req.body);
    res.cookie("Authorization", `Bearer ${token}`, {
      maxAge: 43200000,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    res.status(200).json({ status: "Login successful" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("Authorization");
    res.status(200).json({ status: "Logout successful" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await getData(req.userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const status = await update(req.userId, req.body);
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const status = await remove(req.userId);
    res.clearCookie("Authorization");
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
