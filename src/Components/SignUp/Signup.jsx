// src/Signup.js
import React, { useState } from 'react';
import './Signup.css'
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault()
        setError(false)
        try {
            const res = await axios.post("/api/users/register", {
                username,
                email,
                password
            })
            res.data && window.location.replace("/login")

        } catch (error) {
            setError(true)
            console.log(error);
        }
    }


    return (
        <div className='signup'>
            <h1>Sign Up</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Register</button>



            {error && <p style={{ color: "blue", marginTop: "15px" }}>Something went wrong </p>}

        </div>
    );

};

export default Signup;
