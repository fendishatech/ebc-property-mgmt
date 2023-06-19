const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const expressLayouts = require("express-ejs-layouts");
// Routes
const homeRouter = require("./src/routes/home.routes");
const departmentRouter = require("./src/routes/department.routes");
const employeeRouter = require("./src/routes/employee.routes");
const userRouter = require("./src/routes/user.routes");
const categoryRouter = require("./src/routes/category.routes");
const itemRouter = require("./src/routes/item.routes");
const migrate_tables = require("./src/helpers/migrate_models");

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
app.use("/departments", departmentRouter);
app.use("/employees", employeeRouter);
app.use("/users", userRouter);
app.use("/categories", categoryRouter);
app.use("/items", itemRouter);

// DEV
// MIGRATE MODELS
migrate_tables();

// Start Server
app.listen(3000, () => {
  console.log(`Server is up ... on http://localhost:${3000}`);
});

console.log("Hello");
