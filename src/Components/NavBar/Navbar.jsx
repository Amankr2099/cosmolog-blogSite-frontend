import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

function Navbar() {
    const { user } = useContext(Context)
    return (
        <nav className="navbar">
            <div className='logo'>COSMOLOG</div>
            <ul className="nav-links">
                <Link to={"/"} className='link'>HOME</Link>
                <Link to={"/posts"} className='link'>POPULARS</Link>
                <Link to={"/about"} className='link'>ABOUT</Link>
                {user ? '' : <Link to={"/login"} className='link'>LOGIN</Link>}
                {user ? <Link to={"/profile"} className='link'>PROFILE</Link> : <Link to={"/signup"} className='link'>SIGN UP</Link>}

            </ul>
        </nav>
    );
}

export default Navbar;
