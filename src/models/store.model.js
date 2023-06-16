const { DataTypes } = require("sequelize");
const db = require("../helpers/database");

const Store = db.define("stores", {
  store_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
  },
  store_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Store;
