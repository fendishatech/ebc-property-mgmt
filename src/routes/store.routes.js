const express = require("express");
const Store = require("../models/store.model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { store_name, quantity, location, itemId } = req.body;

    const item = await Store.create({ store_name, quantity, location, itemId });

    res.status(201).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
