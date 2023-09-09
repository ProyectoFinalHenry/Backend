import sequelize from "../db.js";
import { transporterUser } from "../emails/mailer.js";
import { banUser } from "../emails/templates.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { Op } from "sequelize";
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

export const getUsers = async ({ name, status, order }) => {
  let optionsDB = {
    attributes: { exclude: ["resetToken", "password", "RoleId"] },
  };
  const where = {};

  if (name) {
    where.name = { [Op.iLike]: `%${name}%` };
  }
  if(status) {
    where.isActive = status;
  }
  if (Object.keys(where).length > 0) {
    optionsDB.where = where;
  }
  if(order) {
    optionsDB.order = [["name", `${order}`]]
  }
  
  const users = await User.findAll(optionsDB);
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
  //Aquí se da el formato de la data de compras y categorias-----
  const orders = await Order.findAll({
    where: { status: "Approved" },
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
    order: [["date", "ASC"]],
  });

  let sales = {};
  let salesData = {
    data: [],
    categories: [],
  };
  let typesData = {
    series: [0, 0, 0, 0],
    labels: [
      "Café en grano entero",
      "Café molido",
      "Café instantáneo",
      "Café en cápsula",
    ],
  };
  for (let order of orders) {
    let date = order.date.substring(0, 7);
    if (sales[date]) {
      sales[date] += Number(order.totalPrice);
    } else {
      sales[date] = Number(order.totalPrice);
    }
    for (let detail of order.Details) {
      if (detail.Coffee.TypeOfCoffee.type === "Café en grano entero")
        typesData.series[0] += 1;
      if (detail.Coffee.TypeOfCoffee.type === "Café molido")
        typesData.series[1] += 1;
      if (detail.Coffee.TypeOfCoffee.type === "Café instantáneo")
        typesData.series[2] += 1;
      if (detail.Coffee.TypeOfCoffee.type === "Café en cápsula")
        typesData.series[3] += 1;
    }
  }

  for (let date in sales) {
    salesData.categories.push(date);
    salesData.data.push(sales[date]);
  }

  //Aquí se da formato a la data de users----------------------

  const users = await User.findAll({
    attributes: ["createdAt"],
    order: [["createdAt", "ASC"]],
  });
  let dataUser = {};
  let usersData = {
    data: [],
    categories: [],
  };

  for (let user of users) {
    let date = user.createdAt.toISOString().substring(0, 7);
    if (dataUser[date]) {
      dataUser[date] += 1;
    } else {
      dataUser[date] = 1;
    }
  }
  for (let user in dataUser) {
    usersData.categories.push(user);
    usersData.data.push(dataUser[user]);
  }

  //Aquí se da formato a la data de cafés----------------------

  const coffees = await Coffee.findAll({
    attributes: ["name", "stock"],
  });

  const coffeesData = {
    data: [],
    categories: [],
  };

  for (let coffee of coffees) {
    coffeesData.data.push(coffee.stock);
    coffeesData.categories.push(coffee.name);
  }

  return {
    salesData,
    typesData,
    usersData,
    coffeesData,
  };
};
