const Category = require("../models/category.model");

const router = require("express").Router();

// POST : CREATE
router.post("/", async (req, res) => {
  try {
    const dep = await Category.create({
      name: req.body.name,
    });
    if (dep) {
      return res.json({ success: true });
    }
  } catch (error) {
    return res.json({ success: false, error: error });
  }
});

module.exports = router;
