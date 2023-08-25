const { createOrder, notificationOrder, getAllOrders, getOrderById, updateOrderStatus } = require("../controllers/controllerPayment");

const paymentService = async (req, res) => {
  try {
    const response = await createOrder(req.body, req.user);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const notificationService = async (req, res) => {
  try {
    if (req.body.type === 'payment') {
      await notificationOrder(req.body.data.id);
    }
    res.status(200).send("OK");
  } catch (error) {
    res.status(200).send("OK");
    console.log(error.message)
  }
};

const ordersService = async (req, res) => {
  try {
    const orders = await getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const orderById = async (req, res) => {
  try {
    const order = await getOrderById(req.user);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const orderCancelled = async (req, res) => {
  try {
    const order = await updateOrderStatus(req.body);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

module.exports = {
  paymentService,
  notificationService,
  ordersService,
  orderById,
  orderCancelled
};
