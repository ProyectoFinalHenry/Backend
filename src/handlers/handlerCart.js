import { addProduct, deleteProduct } from "../controllers/controllerCart";

export const addProductToCart = async (req, res, next) => {
  try {
    const status = await addProduct(req.body);
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
