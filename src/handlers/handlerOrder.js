import {
    getOrders,
  } from "../controllers/controllerOrder.js";
  
  export const getAll = async (req, res) => {
    try {
      const orders = await getOrders();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: error.mesage });
    }
  };
  
  