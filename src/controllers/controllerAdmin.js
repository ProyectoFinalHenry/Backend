import sequelize from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();
const { User, Role } = sequelize.models;

export const authentication = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error("Email o contraseña incorrecta");

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) throw new Error("Email o contraseña incorrecta");

  const { role } = await Role.findByPk(user.RoleId);
  if (role === "user") throw new Error("No tienes acceso a este sitio");

  const token = jwt.sign(
    { id: user.id, role: user.RoleId },
    process.env.SECRET_KEY,
    {
      expiresIn: "12h",
    }
  );
  return token;
};

export const getUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ["resetToken", "password"] },
  });
  if (!users.length) throw new Error("No se encontraron usuarios");

  return users;
};

export const changeStatus = async ({ userId }) => {
  const user = await User.findByPk(userId);
  if (!user) throw new Error("No se encontro al usuario");

  await user.update({ isActive: !user.isActive });

  return {
    status: "Usuario actualizado",
  };
};
