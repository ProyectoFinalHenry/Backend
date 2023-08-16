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
        values: ["Single Origin Coffee", "Blend of Coffee"]
      },
    },
    { timestamps: false }
  );
}
