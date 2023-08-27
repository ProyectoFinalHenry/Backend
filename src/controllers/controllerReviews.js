import sequelize from "../db.js";
const { User, Coffee, Review } = sequelize.models;

export const add = async (userId, { coffeeId, comments, rating }) => {
  const date = new Date();
  const [review, created] = await Review.findOrCreate({
    where: { UserId: userId, CoffeeId: coffeeId },
    defaults: {
      date,
      rating,
      comments,
    },
  });

  if (!created) {
    await review.update({ date, rating, comments });
  } else {
    const [user, coffee] = await Promise.all([
      User.findByPk(userId),
      Coffee.findByPk(coffeeId),
    ]);
    if (!user) throw new Error("El usuario no existe");
    if (!coffee) throw new Error("El producto no existe");

    await Promise.all([coffee.addReview(review), review.setUser(user)]);
  }

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

  return {
    status: "Reseña eliminada con éxito",
  };
};
