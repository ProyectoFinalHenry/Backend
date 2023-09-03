import sequelize from "../db.js";
import { transporterUser } from "../emails/mailer.js";
import { banUser } from "../emails/templates.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();
const { User, Role, Order, Detail, Coffee, TypeOfCoffee } = sequelize.models;

export const authentication = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error("Incorrect email or password");

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) throw new Error("Incorrect email or password");

  const { role } = await Role.findByPk(user.RoleId);
  if (role === "user") throw new Error("You do not have access to this site");

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
    attributes: { exclude: ["resetToken", "password", "RoleId"] },
  });
  if (!users.length) throw new Error("No users were found");

  return users;
};

export const changeStatus = async ({ userId }) => {
  const user = await User.findByPk(userId);
  if (!user) throw new Error("The user was not found");

  await user.update({ isActive: !user.isActive });

  transporterUser.sendMail(
    banUser(user.email, user.name),
    function (error, info) {
      if (error) console.log(error);
    }
  );

  return {
    status: "User updated",
  };
};

export const getData = async () => {
  const orders = await Order.findAll({
    attributes: ["date", "totalPrice"],
    include: [
      {
        model: Detail,
        attributes: ["quantity", "unitPrice"],
        include: [
          {
            model: Coffee,
            attributes: ["name", "stock"],
            include: [
              {
                model: TypeOfCoffee,
                attributes: ["type"],
              },
            ],
          },
        ],
      },
    ],
  });

  let sales = {}
  let types = {
    
    whole: {
      name: "Café en grano entero",
      total: 0
    },
    ground: {
      name : "Café molido",
      total: 0
    },
    instant: {
      name: "Café instantáneo",
      total: 0
    },
    capsule: {
      name: "Café en cápsula",
      total: 0
    },
  }
  for(let order of orders) {
    let date = order.date.substring(0, 7);
    if (sales[date]) {
      sales[date] += Number(order.totalPrice);
    } else {
      sales[date] = Number(order.totalPrice);
    }
    
    for(let detail of order.Details) {
      if(detail.Coffee.TypeOfCoffee.type === "Café en grano entero") types.whole.total += 1;
      if(detail.Coffee.TypeOfCoffee.type === "Café molido") types.ground.total += 1;
      if(detail.Coffee.TypeOfCoffee.type === "Café instantáneo") types.instant.total += 1;
      if(detail.Coffee.TypeOfCoffee.type === "Café en cápsula") types.capsule.total += 1;
    }
  }

  return {
    sales,
    types
  };
};
