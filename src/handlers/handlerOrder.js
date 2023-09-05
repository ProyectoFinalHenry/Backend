import {
    getOrders,
} from "../controllers/controllerOrder.js";

export const getAll = async (req, res) => {
    try {
        const order = await getOrders(req.userId);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.mesage });
    }
};
