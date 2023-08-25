import sequelize from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { transporterUser } from "../emails/mailer.js";
import { registration, resetPassword } from "../emails/templates.js";
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
  if (!created) throw new Error("Este usuario ya existe");

  transporterUser.sendMail(
    registration(email, name, id),
    function (error, info) {
      if (error) return console.log(error);

      console.log("Message sent: " + info.response);
    }
  );

  const token = jwt.sign({ id, role }, process.env.SECRET_KEY, {
    expiresIn: "12h",
  });

  return token;
};

export const authentication = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error("Email o contraseña incorrecta");

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) throw new Error("Email o contraseña incorrecta");
  if (!user.isActive)
    throw new Error("Este usuario tiene el acceso restringido");

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.SECRET_KEY,
    {
      expiresIn: "12h",
    }
  );

  return token;
};

export const validationEmail = async ({ email }) => {
  const { id, name } = await User.findOne({ where: { email } });
  transporterUser.sendMail(
    registration(email, name, id),
    function (error, info) {
      if (error) return console.log(error);

      console.log("Message sent: " + info.response);
    }
  );
  return {
    status: "Email enviado con exito",
  };
};

export const passwordResetEmail = async ({ email }) => {
  const user = await User.findOne({ where: { email } });

  const hashedToken = await bcrypt.hash(user.id, 8);
  await user.update({ resetToken: hashedToken });

  transporterUser.sendMail(
    resetPassword(email, user.name, hashedToken),
    function (error, info) {
      if (error) return console.log(error);

      console.log("Message sent: " + info.response);
    }
  );

  return {
    status: "Email enviado con exito",
  };
};

export const validator = async ({ id }) => {
  await User.update({ validated: true }, { where: { id } });

  return {
    status: "Email validado con exito",
  };
};

export const passwordReset = async ({ token, newPassword }) => {
  const user = await User.findOne({ where: { resetToken: token } });
  if (!user) throw new Error("El token proporcionado es invalido");

  const passwordHashed = await bcrypt.hash(newPassword, 8);
  await user.update({ password: passwordHashed, resetToken: null });

  return {
    status: "Contraseña reestablecida",
  };
};

export const getData = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ["resetToken"] },
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
    status: "Actualizado con éxito",
  };
};

export const remove = async (id) => {
  await User.destroy({ where: { id } });
  return {
    status: "Eliminado con éxito",
  };
};
