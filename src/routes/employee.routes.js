const express = require("express");
const Employee = require("../models/employee.model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { first_name, last_name, phone_no, employee_position, departmentId } =
      req.body;

    const employee = await Employee.create({
      first_name,
      last_name,
      phone_no,
      employee_position,
      departmentId,
    });

    res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
