import getAll from "../controllers/controllerCategory.js";

const getCategorys = async (req, res) => {
  try {
    const { category } = req.params;

    const data = await getAll(category);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export default getCategorys;
