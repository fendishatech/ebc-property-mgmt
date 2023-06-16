const Sequelize = require("sequelize");

const db = new Sequelize("ebc_property_mgmt", "root", "", {
  host: "localhost",
  dialect: "mysql",
  // logging: false
});
module.exports = db;
