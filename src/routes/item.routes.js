const express = require("express");
const Item = require("../models/item.model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { item_name, partnumber, categoryId } = req.body;

    const item = await Item.create({ item_name, partnumber, categoryId });

    res.status(201).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
