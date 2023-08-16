import {
  getAll,
  getById,
  post,
  update,
  remove,
} from "../controllers/controllerCoffee.js";

export const getCoffees = async (req, res) => {
  try {
    let coffees = await getAll(req.query);
    res.status(200).json(coffees);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const getCoffeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const coffee = await getById(id);
    res.status(200).json(coffee);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const postCoffee = async (req, res) => {
  try {
    const status = await post(req.body);
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateCoffee = async (req, res) => {
  const { id } = req.params;
  try {
    const status = await update(id, req.body);
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteCoffee = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteWine = await remove(id);
    res.status(200).json(deleteWine);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
