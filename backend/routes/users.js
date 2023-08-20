const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const UsersModel = require("../models/users");
const passwordCheck = require("../utils/passwordCheck");

router.get("/all", async (req, res) => {
  const users = await UsersModel.findAll({ where: { role: "user" } });

  res.status(200).json({
    data: users,
    metadata: "Get users by username",
  });
});

router.get("/account/:username", async (req, res) => {
  const { username } = req.params;

  const users = await UsersModel.findOne({ where: { username: username } });

  res.status(200).json({
    data: users,
    metadata: "Get users by username",
  });
});

router.post("/", async (req, res) => {
  const { username, nama, no_hp, password } = req.body;

  const encryptPwd = await bcrypt.hash(password, 10);

  if (!username || !nama || !no_hp || !password) {
    res.status(400).json({
      error: "Bad request",
    });
  } else {
    const users = await UsersModel.create({
      username,
      nama,
      no_hp,
      password: encryptPwd,
    });
    res.status(200).json({
      status: 200,
      data: users,
      metadata: "Create user success",
    });
  }
});

router.put("/", async (req, res) => {
  const { username, nama, password, passwordBaru } = req.body;

  const user = await UsersModel.findOne({ where: { username: username } });
  if (!user) {
    res.status(404).json({
      error: "User Not Found",
    });
  } else {
    const check = await passwordCheck(username, password);
    const encryptPwd = await bcrypt.hash(passwordBaru, 10);

    if (check.compare === true) {
      const users = await UsersModel.update(
        {
          nama,
          password: encryptPwd,
        },
        { where: { username: username } }
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

router.delete("/:username", async (req, res) => {
  const { username } = req.params;

  const user = await UsersModel.destroy({ where: { username: username } });

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
  const { username, password } = req.body;

  const check = await passwordCheck(username, password);

  if (check.compare === true) {
    res.status(200).json({
      status: 200,
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
