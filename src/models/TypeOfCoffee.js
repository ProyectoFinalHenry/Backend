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
          "Café en grano entero",
          "Café molido",
          "Café en cápsulas",
          "Café instantáneo",
        ],
      },
    },
    { timestamps: false }
  );
}
