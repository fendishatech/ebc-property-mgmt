const { DataTypes } = require("sequelize");
const db = require("../helpers/database");
const Item = require("./item.model");

const Store = db.define("stores", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  store_name: {
    type: DataTypes.ENUM("ict", "transmitter", "technical"),
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Item.hasMany(Store);
Store.belongsTo(Item);

module.exports = Store;
