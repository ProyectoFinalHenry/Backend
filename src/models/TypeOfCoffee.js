import { DataTypes } from "sequelize";

export default function (sequelize) {
  sequelize.define(
    "TypeOfCoffee",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: DataTypes.ENUM,
        allowNull: false,
        unique: true,
        values: [
          "Whole bean coffee",
          "Ground coffee",
          "Capsule coffee",
          "Instant coffee",
        ],
      },
    },
    { timestamps: false }
  );
}
