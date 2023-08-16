import { DataTypes } from "sequelize";

export default function (sequelize) {
  sequelize.define(
    "Role",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      role: {
        type: DataTypes.ENUM,
        allowNull: false,
        unique: true,
        values: ["user", "admin"],
      },
    },
    { timestamps: false }
  );
}
