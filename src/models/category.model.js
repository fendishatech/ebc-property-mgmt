const { DataTypes } = require("sequelize");
const db = require("../helpers/database");

const Category = sequelize.define("categories", {
  cat_id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Category;
