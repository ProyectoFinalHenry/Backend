import sequelize from "../db.js";
import dotenv from "dotenv";
const { Order } = sequelize.models;
dotenv.config();

export const getOrders = async () => {
    const orders = await Order.findAll();
    if (!orders) throw new Error("No hay ordenes en la base de datos.");
    return orders;
};

