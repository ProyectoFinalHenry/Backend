import { DataTypes } from "sequelize";

export default function (sequelize) {
  sequelize.define(
    "Origin",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      origin: {
        type: DataTypes.ENUM,
        allowNull: false,
        unique: true,
        values: ["Café de origen único", "Mezcla de Café"]
      },
    },
    { timestamps: false }
  );
}
