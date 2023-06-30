const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const ProductsModel = require("../models/products");

router.get("/:jenis", async (req, res) => {
  const { jenis } = req.params;

  const products = await UsersModel.findOne({ where: { jenis: jenis } });

  res.status(200).json({
    data: products,
    metadata: "Get data by jenis",
  });
});

module.exports = router;
