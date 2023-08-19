import sequelize from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
const { User, Order, Detail, Coffee } = sequelize.models;
dotenv.config();

export const newUser = async ({ name, email, password, image }) => {
  const passwordHashed = await bcrypt.hash(password, 8);

  const [{ id, role }, created] = await User.findOrCreate({
    where: { email },
    defaults: {
      name,
      email,
      password: passwordHashed,
      image:
        image ||
        "https://i.pinimg.com/564x/0e/6e/aa/0e6eaa94ab71d91b7d0f1dea83d49f61.jpg",
    },
  });
  if (!created) throw new Error("This user alredy exist");

  const token = jwt.sign({ id, role }, process.env.SECRET_KEY, {
    expiresIn: "12h",
  });

  return token;
};

export const authentication = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error("Email or password was not correct");

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) throw new Error("Email or password was not correct");
  if (user.isActive === false) throw new Error("This user is banend");

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.SECRET_KEY,
    {
      expiresIn: "12h",
    }
  );

  return token;
};

export const getData = async (id) => {
  const user = await User.findByPk(id, {
    include: [
      {
        model: Order,
        attributes: ["date", "status", "totalPrice"],
        include: [
          {
            model: Detail,
            attributes: ["quantity", "unitPrice"],
            include: [
              {
                model: Coffee,
                attributes: ["name", "description", "image"],
              },
            ],
          },
        ],
      },
    ],
  });
  if (!user) throw new Error("Invalid Token");

  return user;
};

export const update = async (id, data) => {
  await User.update(data, { where: { id } });
  return {
    status: "Update successfully",
  };
};

export const remove = async (id) => {
  await User.destroy({ where: { id } });
  return {
    status: "Deleted successfully",
  };
};
