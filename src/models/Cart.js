import { DataTypes } from "sequelize";

export default function (sequelize) {
  sequelize.define(
    "Cart",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
        },
      },
    },
    { timestamps: false }
  );
}
