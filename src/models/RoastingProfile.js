import { DataTypes } from "sequelize";

export default function (sequelize) {
  sequelize.define(
    "RoastingProfile",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      profile: {
        type: DataTypes.ENUM,
        allowNull: false,
        unique: true,
        values: ["Tostado ligero", "Tostado medio", "Tostado oscuro"],
      },
    },
    { timestamps: false }
  );
}
