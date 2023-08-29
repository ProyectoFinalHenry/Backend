import {
  createOrder,
  completeOrder,
} from "../controllers/controllerPayment.js";

export const paymentService = async (req, res) => {
  try {
    const order = await createOrder(req.userId);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.mesage });
  }
};

export const webhook = async (req, res) => {
  try {
    if (req.body.type === "payment") {
      await completeOrder(req.body.data.id);
    }
    res.status(200).send("OK");
  } catch (error) {
    res.status(200).send("OK");
    console.log(error.message);
  }
};
