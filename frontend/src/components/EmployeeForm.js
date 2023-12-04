import React, { useState } from 'react';
import axios from 'axios';

function EmployeeForm({ employee, onSave }) {
    const [name, setName] = useState(employee ? employee.name : '');
    const [position, setPosition] = useState(employee ? employee.position : '');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { name, position };
        try {
            if (employee) {
                await axios.put(`http://localhost:3000/api/v1/emp/${employee._id}`, data);
            } else {
                await axios.post('http://localhost:3000/api/v1/emp', data);
            }
            onSave();
        } catch (error) {
            console.error('Error saving employee:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position" />
            <button type="submit">Save</button>
        </form>
    );
}

export default EmployeeForm;