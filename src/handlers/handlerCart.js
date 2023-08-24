import {
  addProduct,
  deleteProduct,
  getProducts,
} from "../controllers/controllerCart.js";

export const addProductToCart = async (req, res, next) => {
  try {
    const status = await addProduct(req.userId, req.body);
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProductToCart = async (req, res, next) => {
  try {
    const status = await deleteProduct(req.body);
    res.status(200).json(status);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getProductsToCart = async (req, res, next) => {
  try {
    const cart = await getProducts(req.userId);
    res.status(200).json(cart);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
