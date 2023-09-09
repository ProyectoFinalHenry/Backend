import mercadopago from "mercadopago";
import axios from "axios";
import dotenv from "dotenv";
import sequelize from "../db.js";
import { transporterUser } from "../emails/mailer.js";
import {
  paymentApproved,
  paymentCancelled,
  paymentPending,
} from "../emails/templates.js";
dotenv.config();
const { User, Cart, Coffee, Order, Detail } = sequelize.models;

mercadopago.configure({
  access_token: process.env.MP_TOKEN,
});

export const createOrder = async (id) => {
  /**Verifica que exista el usuario y carrito*/
  const user = await User.findByPk(id);
  if (!user) throw new Error("El usuario no existe");
  if (!user.validated) throw new Error("El email no esta validado");
  if (!user.isActive) throw new Error("Lo sentimos, no tienes permiso para realizar esta acción. Tu cuenta ha sido suspendida/baneada. Por favor, ponte en contacto con el soporte técnico para más información.");

  const products = await Cart.findAll({
    where: { UserId: id },
    include: [
      {
        model: Coffee,
        attributes: ["name", "price", "image", "description"],
      },
    ],
  });
  if (!products.length) throw new Error("El carrito esta vacio");

  /**Apartir de aquí se setean los items de la orden de MP*/
  let items = [];
  for (const product of products) {
    const { quantity, CoffeeId, Coffee } = product;
    const { name, price, image, description } = Coffee;

    items.push({
      id: CoffeeId,
      title: name,
      quantity,
      unit_price: Number(price),
      currency_id: "ARS",
      picture_url: image,
      description,
    });
  }
  //Configuracion de las preferencias de MP-----------------------------------

  let preferences = {
    items,
    back_urls: {
      success: "https://granodeoro.vercel.app/products/page/1",
      failure: "https://granodeoro.vercel.app/products/page/1",
      pending: "https://granodeoro.vercel.app/products/page/1",
    },
    payment_methods: {
      installments: 1,
    },
    notification_url: "https://backend-mniu.onrender.com/payment/webhook",
    metadata: {
      id: user.id,
    },
  };
  //Finalmente crea la orden de compra de MP--------------------------------
  const response = await mercadopago.preferences.create(preferences);
  return response;
};

export const completeOrder = async (id) => {
  const { status, status_detail, metadata } =
    //Aquí se hace la peticion a mp de la compra
    (
      await axios(`https://api.mercadopago.com/v1/payments/${id}`, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${process.env.MP_TOKEN}`,
        },
      })
    ).data;

  //Trae los productos del carrito y al usuario
  const user = await User.findByPk(metadata.id);
  const products = await Cart.findAll({
    where: { UserId: metadata.id },
    include: [
      {
        model: Coffee,
        attributes: ["price"],
      },
    ],
  });

  //Crea la orden en la Db y sus respectivos detalles
  const order = await Order.create({
    date: new Date(),
    totalPrice: 1 /**Se crea la orden con un valor de 1, para hacer un solo bucle*/,
  });
  let total = 0;

  for (let product of products) {
    const { quantity, CoffeeId } = product;

    total += product.Coffee.price * quantity;
    const [coffee, detail] = await Promise.all([
      Coffee.findByPk(CoffeeId),
      Detail.create({ quantity, unitPrice: product.Coffee.price }),
    ]);
    await Promise.all([detail.setCoffee(coffee), order.addDetail(detail)]);
  }
  await Promise.all([
    order.update({ totalPrice: total }),
    order.setUser(user),
    Cart.destroy({ where: { UserId: metadata.id } }),
  ]);

  //A partir de aquí se maneja la orden dependiendo del estado del pago
  if (status === "approved" && status_detail === "accredited") {
    const orden = await Order.findByPk(order.id, {
      include: [{ model: Detail, attributes: ["quantity", "CoffeeId"] }],
    });

    for (let detail of orden.Details) {
      const { quantity, CoffeeId } = detail;
      const coffee = await Coffee.findByPk(CoffeeId);
      const stock = coffee.stock - quantity;
      const updateData = {
        stock,
        isActive: stock > 0,
      };
      await coffee.update(updateData);
    }
    await orden.update({ status: "Approved" });

    transporterUser.sendMail(
      paymentApproved(user.email, user.name),
      function (error, info) {
        if (error) console.log(error);
      }
    );
  } else if (status === "rejected") {
    //En caso de ser rechazado el pago se actualiza el status de la orden y se envia el correspodiente email
    await Order.update({ status: "Cancelled" }, { where: { id: order.id } });

    transporterUser.sendMail(
      paymentCancelled(user.email, user.name),
      function (error, info) {
        if (error) console.log(error);
      }
    );
  } else if (status === "in_process") {
    //En caso de estar pendiente el pago se envia el correspodiente email
    transporterUser.sendMail(
      paymentPending(user.email, user.name),
      function (error, info) {
        if (error) console.log(error);
      }
    );
  }
};
