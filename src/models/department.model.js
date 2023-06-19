const { DataTypes } = require("sequelize");
const db = require("../helpers/database");

const Department = db.define("departments", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Department;
