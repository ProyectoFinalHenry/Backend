import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import modelCoffee from "./models/Coffee.js";
import modelDetail from "./models/Detail.js";
import modelOrder from "./models/Order.js";
import modelOrigin from "./models/Origin.js";
import modelReview from "./models/Review.js";
import modelRoastingProfile from "./models/RoastingProfile.js";
import modelRole from "./models/Role.js";
import modelTypeOfCoffee from "./models/TypeOfCoffee.js";
import modelUser from "./models/User.js";

//Config

dotenv.config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

//Models

modelCoffee(sequelize);
modelDetail(sequelize);
modelOrder(sequelize);
modelOrigin(sequelize);
modelReview(sequelize);
modelRoastingProfile(sequelize);
modelRole(sequelize);
modelTypeOfCoffee(sequelize);
modelUser(sequelize);

//Relationship

const {
  Coffee,
  Detail,
  Order,
  Origin,
  Review,
  RoastingProfile,
  Role,
  TypeOfCoffee,
  User,
} = sequelize.models;

TypeOfCoffee.hasMany(Coffee, {
  foreignKey: "TypeOfCoffeeId",
});
Coffee.belongsTo(TypeOfCoffee);

RoastingProfile.hasMany(Coffee, {
  foreignKey: "RoastingProfileId",
});
Coffee.belongsTo(RoastingProfile);

Origin.hasMany(Coffee, {
  foreignKey: "OriginId",
});
Coffee.belongsTo(Origin);

Coffee.hasMany(Review, {
  foreignKey: "CoffeeId",
});
Review.belongsTo(Coffee);

User.hasMany(Review, {
  foreignKey: "UserId",
});
Review.belongsTo(User);

Role.hasMany(User, {
  foreign: "RoleId",
});
User.belongsTo(Role);

Coffee.hasOne(Detail, {
  foreignKey: "CoffeeId",
});
Detail.belongsTo(Coffee);

Order.hasMany(Detail, {
  foreignKey: "OrderId",
});
Detail.belongsTo(Order);

User.hasMany(Order, {
  foreignKey: "UserId",
});
Order.belongsTo(User);

export default sequelize;
