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
        values: ["Light Roast", "Medium Roast", "Dark Roast"],
      },
    },
    { timestamps: false }
  );
}
