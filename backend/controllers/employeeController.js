const Employee = require('../models/employee');

// Get all employees
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Get a single employee by ID
exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        res.json(employee);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Create a new employee
exports.createEmployee = async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Update an employee
exports.updateEmployee = async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEmployee) {
            return res.status(404).send('Employee not found');
        }
        res.json(updatedEmployee);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Delete an employee
exports.deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if (!deletedEmployee) {
            return res.status(404).send('Employee not found');
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error.message);
    }
};
