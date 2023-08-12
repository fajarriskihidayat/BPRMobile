const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.config");

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    nama: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Users",
  }
);

module.exports = User;
