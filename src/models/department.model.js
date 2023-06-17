const { DataTypes } = require("sequelize");
const db = require("../helpers/database");

const Department = sequelize.define("departments", {
  dep_id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Department;
