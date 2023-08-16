import { DataTypes } from "sequelize";

export default function (sequelize) {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2, 20],
            msg: "The name must contain between 2 and 20 characters"
          },
          isAlphanumeric: {
            args: true,
            msg: "The name does not allow special characters"
          },
        },
      },
      image: {
        type: DataTypes.STRING,
        defaultValue:
          "https://i.pinimg.com/564x/0e/6e/aa/0e6eaa94ab71d91b7d0f1dea83d49f61.jpg",
        validate: {
          isUrl: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
}
