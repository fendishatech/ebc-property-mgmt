const router = require("express").Router();
// const BlogPost = require("../models/blog.model");

// GET /blog-posts
router.get("/", async (req, res) => {
  res.render("home.index");
});

module.exports = router;
