const Department = require("../models/department.model");

const router = require("express").Router();

// GET
router.post("/", async (req, res) => {
  try {
    const dep = await Department.create({
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
