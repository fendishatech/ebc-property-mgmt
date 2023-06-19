const { DataTypes } = require("sequelize");
const db = require("../helpers/database");
const Category = require("./category.model");

const Item = db.define("items", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  item_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  partnumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Category.hasMany(Item);
Item.belongsTo(Category);

module.exports = Item;
