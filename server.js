const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const expressLayouts = require("express-ejs-layouts");
const homeRouter = require("./src/routes/home.routes");

// Middleware
this.app.set("view engine", "ejs");
this.app.set("views", path.join(__dirname, "./src/views"));
this.app.set("layout", "layouts/layout");
this.app.use(expressLayouts);
this.app.use(express.static("public")); // Serve static files first
this.app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
this.app.use(express.json()); // Parse JSON request bodies
this.app.use(methodOverride("_method"));

// Routes
this.app.use("/", homeRouter);

// // Start Server
this.app.listen(3000, () => {
  console.log(`Server is up ... on http://localhost:${3000}`);
});
