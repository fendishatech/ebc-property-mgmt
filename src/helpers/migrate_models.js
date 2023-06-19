const User = require("../models/user.model");
const Employee = require("../models/employee.model");
const Department = require("../models/department.model");
const Category = require("../models/category.model");
const Item = require("../models/item.model");

// DEV
const migrate_tables = async () => {
  try {
    await User.sync();
    await Department.sync();
    await Employee.sync();
    await Category.sync();
    await Item.sync();

    console.log("Table Migrated Successfully");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
};

module.exports = migrate_tables;
