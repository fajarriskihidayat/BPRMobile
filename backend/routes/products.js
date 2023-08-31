const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const ProductsModel = require("../models/products");

router.get("/all", async (req, res) => {
  const product = await ProductsModel.findAll();

  res.status(200).json({
    data: product,
    metadata: "Get data by nama",
  });
});

router.get("/name/:nama", async (req, res) => {
  const { nama } = req.params;

  const product = await ProductsModel.findOne({ where: { nama: nama } });

  res.status(200).json({
    data: product,
    metadata: "Get data by nama",
  });
});

router.post("/", async (req, res) => {
  const { nama, jenis, suku_bunga, deskripsi, syarat, manfaat, img_url } =
    req.body;

  const product = await ProductsModel.create({
    nama,
    jenis,
    suku_bunga,
    deskripsi,
    syarat,
    manfaat,
    img_url,
  });

  res.status(200).json({
    data: product,
    metadata: "Create product success",
  });
});

router.put("/", async (req, res) => {
  const { nama, suku_bunga } = req.body;

  const product = await ProductsModel.update(
    {
      suku_bunga,
    },
    { where: { nama: nama } }
  );

  res.status(200).json({
    status: 200,
    product: { updated: product[0] },
    metadata: "Update product success",
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const product = await ProductsModel.destroy({ where: { id: id } });

  res.status(200).json({
    product: { deleted: product },
    metadata: "Delete product success",
  });
});

module.exports = router;
