const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.config");

class Products extends Model {}

Products.init(
  {
    nama: {
      type: DataTypes.STRING,
    },
    jenis: {
      type: DataTypes.STRING,
    },
    suku_bunga: {
      type: DataTypes.INTEGER,
    },
    img_url: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Products",
  }
);

module.exports = Products;
