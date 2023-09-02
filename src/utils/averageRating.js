import sequelize from "../db.js";

const { Coffee, Review } = sequelize.models;

const averageReview = async (coffeeId) => {
  const coffee = await Coffee.findByPk(coffeeId, {
    include: [{ model: Review, attributes: ["rating"] }],
  });
  let count = 0;
  let total = 0;

  for (let review of coffee.Reviews) {
    count += 1;
    total += review.rating;
  }
  const average = Math.round(total / count);
  await coffee.update({ averageRating: average });
};

export default averageReview;
