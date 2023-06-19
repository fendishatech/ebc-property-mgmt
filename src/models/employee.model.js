const { DataTypes } = require("sequelize");
const Department = require("./department.model");
const db = require("../helpers/database");

const Employee = db.define("employees", {
  id: {
    type: DataTypes.INTEGER,
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
  phone_no: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  employee_position: {
    type: DataTypes.STRING,
    defaultValue: false,
  },
});
Department.hasMany(Employee);
Employee.belongsTo(Department);

module.exports = Employee;
