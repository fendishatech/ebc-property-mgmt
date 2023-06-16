const { DataTypes } = require("sequelize");
const db = require("../helpers/database");

const User = db.define("users", {
  user_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_role: {
    type: DataTypes.ENUM("user", "admin", "staff"),
    defaultValue: false,
  },
});

module.exports = User;
