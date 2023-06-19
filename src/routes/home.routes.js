const router = require("express").Router();
const Item = require("../models/item.model");
const Store = require("../models/store.model");
const User = require("../models/user.model");

// GET
router.get("/", async (req, res) => {
  const storeItems = await Store.findAll();
  const items = await Item.findAll();
  const users = await User.findAll();
  res.render("home/index", {
    storeItems,
    items,
    users,
  });
});

module.exports = router;
