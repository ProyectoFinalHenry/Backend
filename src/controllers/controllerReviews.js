import sequelize from "../db.js";
import averageReview from "../utils/averageRating.js";

const { User, Coffee, Review } = sequelize.models;

export const add = async (userId, { coffeeId, title, comments, rating }) => {
  const date = new Date();
  const [user, coffee] = await Promise.all([
    User.findByPk(userId),
    Coffee.findByPk(coffeeId),
  ]);
  if (!user) throw new Error("El usuario no existe");
  if (!coffee) throw new Error("El producto no existe");

  let [review, created] = await Review.findOrCreate({
    where: { UserId: userId, CoffeeId: coffeeId },
    defaults: {
      date,
      rating,
      title,
      comments,
    },
  });
  if (!created) {
    await review.update({ date, rating, title, comments });
  } else {
    await Promise.all([coffee.addReview(review), review.setUser(user)]);
  }

  await averageReview(coffeeId);

  return {
    status: "Reseña agregada con éxito",
  };
};

export const remove = async (userId, { coffeeId }) => {
  const [user, coffee] = await Promise.all([
    User.findByPk(userId),
    Coffee.findByPk(coffeeId),
  ]);
  if (!user) throw new Error("El usuario no existe");
  if (!coffee) throw new Error("El café no existe");

  await Review.destroy({ where: { UserId: userId, CoffeeId: coffeeId } });

  await averageReview(coffeeId);

  return {
    status: "Reseña eliminada con éxito",
  };
};
