import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/emp');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };

        fetchEmployees();
    }, []);

    return (
        <div>
            <h1>Employee List</h1>
            <ul>
                {employees.map(employee => (
                    <li key={employee._id}>{employee.name} - {employee.position}</li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeList;
