import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/v1/user/signup', { username, email, password });
            console.log('Signup successful:', response.data);
            // Redirect or inform the user of successful signup
        } catch (error) {
            console.error('Signup error:', error);
            // Handle signup error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Signup</button>
        </form>
    );
}

export default Signup;
