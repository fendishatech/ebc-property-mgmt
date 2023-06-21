const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

// POST : Login
router.post("/register", async (req, res) => {
  // get username
  // encrypt password
  // register and send to dashboard
});

// GET : Login page
router.get("/login", async (req, res) => {
  res.render("auth/login", { layout: false });
});

// POST : Login
router.post("/login", async (req, res) => {
  // get username
  // check password
  // login and send to dashboard
});

module.exports = router;
