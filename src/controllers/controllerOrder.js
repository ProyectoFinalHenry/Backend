import sequelize from "../db.js";
const { Order } = sequelize.models;


export const getOrders = async () => {
    const orders = await Order.findAll();
    if (!orders) throw new Error("No hay registro de ventas en la bd.");
    return orders;
};

