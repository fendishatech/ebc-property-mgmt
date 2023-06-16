const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const expressLayouts = require("express-ejs-layouts");
const homeRouter = require("./src/routes/home.routes");

// define app
const app = express();

// Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public")); // Serve static files first
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
app.use(express.json()); // Parse JSON request bodies
app.use(methodOverride("_method"));

// Routes
app.use("/", homeRouter);

// // Start Server
app.listen(3000, () => {
  console.log(`Server is up ... on http://localhost:${3000}`);
});

console.log("Hello");
