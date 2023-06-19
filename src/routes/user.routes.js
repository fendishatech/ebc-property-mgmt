const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { first_name, last_name, username, password, user_role } = req.body;

    const user = await User.create({
      first_name,
      last_name,
      username,
      password,
      user_role,
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
