
import React, { useContext, useRef, useState } from 'react';
import './Login.css'
import { Context } from '../context/Context'
import axios from 'axios';

const Login = () => {
    const userRef = useRef()
    const passwordRef = useRef()
    const { user, dispatch, isFetching } = useContext(Context)
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault()
        setError(false)
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post("/api/users/login", {
                username: userRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
            window.location.replace("/")
        } catch (error) {
            setError(true)
            dispatch({ type: "LOGIN_FAILURE" })
            console.log(error);
        }
    };
    console.log(user);

    return (
        <div className='login'>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="username"
                ref={userRef}

            />
            <input
                type="password"
                placeholder="Password"
                ref={passwordRef}
            />
            <button onClick={handleLogin} disabled={isFetching}>Login</button>
            {error && <p style={{ color: "blue", marginTop: "15px" }}>Something went wrong </p>}
        </div>
    );
};

export default Login;
