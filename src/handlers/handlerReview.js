import { add, remove } from "../controllers/controllerReviews.js";

export const addReview = async (req, res) => {
  try {
    const status = await add(req.userId, req.body);
    res.status(200).json(status);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const removeReview = async (req, res) => {
  try {
    const status = await remove(req.userId, req.body);
    res.status(200).json(status);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
