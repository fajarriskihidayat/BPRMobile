const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const UsersModel = require("../models/users");
const passwordCheck = require("../utils/passwordCheck");

router.get("/:nip", async (req, res) => {
  const { nip } = req.params;

  const users = await UsersModel.findOne({ where: { nip: nip } });

  res.status(200).json({
    data: users,
    metadata: "Get users by nip",
  });
});

router.post("/", async (req, res) => {
  const { nip, nama, jabatan, password } = req.body;

  const encryptPwd = await bcrypt.hash(password, 10);

  if (!nip || !nama || !jabatan || !password) {
    res.status(400).json({
      error: "Bad request",
    });
  } else {
    const users = await UsersModel.create({
      nip,
      nama,
      jabatan,
      password: encryptPwd,
    });
    res.status(200).json({
      data: users,
      metadata: "Create user success",
    });
  }
});

router.put("/", async (req, res) => {
  const { nip, nama, jabatan, password, passwordBaru } = req.body;

  const user = await UsersModel.findOne({ where: { nip: nip } });
  if (!user) {
    res.status(404).json({
      error: "User Not Found",
    });
  } else {
    const check = await passwordCheck(nip, password);
    const encryptPwd = await bcrypt.hash(passwordBaru, 10);

    if (check.compare === true) {
      const users = await UsersModel.update(
        {
          nama,
          jabatan,
          password: encryptPwd,
        },
        { where: { nip: nip } }
      );

      res.status(200).json({
        user: { updated: users[0] },
        metadata: "Update Data Success",
      });
    } else {
      res.status(400).json({
        error: "Bad request",
      });
    }
  }
});

router.delete("/:nip", async (req, res) => {
  const { nip } = req.params;

  const user = await UsersModel.destroy({ where: { nip: nip } });

  if (!user) {
    res.status(404).json({
      error: "User Not Found",
    });
  } else {
    res.status(200).json({
      user: { deleted: user },
      metadata: "Delete user success",
    });
  }
});

router.post("/login", async (req, res) => {
  const { nip, password } = req.body;

  const check = await passwordCheck(nip, password);

  if (check.compare === true) {
    res.status(200).json({
      user: check.userData,
      metadata: "Login success",
    });
  } else {
    res.status(400).json({
      error: "Bad request",
    });
  }
});

module.exports = router;
