const express = require("express");
const Store = require("../models/store.model");
const Item = require("../models/item.model");
const router = express.Router();

// GET : CREATE
router.get("/new", async (req, res) => {
  const store_names = ["ict", "transmitter", "technical"];
  const items = await Item.findAll();
  res.render("store/new", { store: new Store(), store_names, items });
});

// POST : CREATE
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

// GET : GET ALL
router.get("/", async (req, res) => {
  try {
    const storeItems = await Store.findAll();
    res.render("store/index", { storeItems });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// GET /:id
router.get("/:id", async (req, res) => {
  try {
    const blog = await BlogPost.findByPk(req.params.id);
    if (!blog) {
      res.status(404).send("Blog Post Not Found");
    } else {
      res.render("blogs/show", { blog });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// POST /
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    const blog = await BlogPost.create({ title, content });

    return res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// GET /:id/edit
router.get("/:id/edit", async (req, res) => {
  try {
    const blog = await BlogPost.findByPk(req.params.id);
    if (!blog) {
      res.status(404).send("Blog Post Not Found");
    } else {
      res.render("blogs/edit", { blog });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// PUT /:id
router.put("/:id", async (req, res) => {
  let blog;

  try {
    const blog = await BlogPost.findByPk(req.params.id);
    const title = req.body.title;
    const content = req.body.content;

    if (!blog) {
      res.status(404).send("Blog Post Not Found");
    } else {
      const updatedBlog = await blog.update({ title, content });
      res.redirect(`/`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// DELETE /blog-posts/:id
router.delete("/:id", async (req, res) => {
  console.log("Id :", req.params.id);
  try {
    const blog = await BlogPost.findByPk(req.params.id);
    console.log("Blog :", blog);
    if (!blog) {
      res.status(404).send("Blog Post Not Found");
    } else {
      await blog.destroy();
      res.redirect("/");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
