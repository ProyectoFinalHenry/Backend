import mercadopago from "mercadopago";
import axios from "axios";
import dotenv from "dotenv";
import sequelize from "../db.js";
dotenv.config();
const { User, Cart, Coffee, Order, Detail } = sequelize.models;
const CoffeeModel =
  Coffee; /**renombro a Coffee ya que si no chocara con otra constante*/

mercadopago.configure({
  access_token: process.env.MP_TOKEN,
});

export const createOrder = async (id) => {
  /**Verifica que exista el usuario y carrito*/
  const user = await User.findByPk(id);
  if (!user) throw new Error("El usuario no existe");

  const products = await Cart.findAll({
    where: { UserId: id },
    include: [
      {
        model: CoffeeModel,
        attributes: ["name", "price", "image", "description"],
      },
    ],
  });
  if (!products.length) throw new Error("El carrito esta vacio");

  /**Apartir de aquí se crea la orden y detalles de compra en la db, 
    y se setean los items de la orden de MP*/
  const order = await Order.create({
    date: new Date(),
    totalPrice: 1 /**Se crea la orden con un valor de 1, para hacer un solo bucle*/,
  });

  let total = 0;
  let items = [];

  for (const product of products) {
    const { quantity, CoffeeId, Coffee } = product;
    const { name, price, image, description } = Coffee;

    total += price * quantity;
    items.push({
      id: CoffeeId,
      title: name,
      quantity,
      unit_price: Number(price),
      currency_id: "ARS",
      picture_url: image,
      description,
    });

    const [coffee, detail] = await Promise.all([
      CoffeeModel.findByPk(CoffeeId),
      Detail.create({ quantity, unitPrice: price }),
    ]);
    await Promise.all([detail.setCoffee(coffee), order.addDetail(detail)]);
  }
  await Promise.all([order.update({ totalPrice: total }), order.setUser(user)]);
  //Configuracion de las preferencias de MP-----------------------------------

  let preferences = {
    items,
    back_urls: {
      success: "https://granodeoro.vercel.app/products/page/1",
      failure: "https://granodeoro.vercel.app/products/page/1",
      pending: "https://granodeoro.vercel.app/products/page/1",
    },
    notification_url: "https://backend-mniu.onrender.com/payment/webhook",
    metadata: {
      name: user.name,
      email: user.email,
      order_id: order.id,
    },
  };
  //Finalmente crea la orden de compra de MP--------------------------------
  console.log(preferences);
  const response = await mercadopago.preferences.create(preferences);
  return response;
};

export const statusOrder = async (id) => { //EN TRABAJO
  const { status, status_detail, metadata } = (
    await axios(`https://api.mercadopago.com/v1/payments/${id}`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.process.env.MP_TOKEN}`,
      },
    })
  ).data;

  if (status === "approved" && status_detail === "accredited") {
    const order = await Order.findByPk(metadata.order_id, {
      include: [{ model: Detail, attributes: ["quantity", "CoffeeId"] }],
    });
    // for (let detail of order) {
    //   const coffee = await Coffee.findByPk(CoffeeId);
    //   const stock = coffee.stock - quantity;
    //   const updateData = {
    //     stock,
    //     isActive: stock > 0,
    //   };
    //   await coffee.update(updateData, { where: { id } });
    // }
    await order.update(
      { status: "Approved" },
      { where: { id: metadata.order_id } }
    );

    //aqui va email de pago aprobado
  } else if (status === "rejected") {
    await Order.update(
      { status: "Cancelled" },
      { where: { id: metadata.order_id } }
    );
    //aqui va email de pago rechazado
  } else if (status === "in_process") {
    //aqui va email de pago pendiente
  }
};
