import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="../images/planet_logo.png" alt="Blog Logo" />
                    <h2>COSMOLOG</h2>
                </div>
            </div>


            <div className="footer-social">
                <p>Find Us</p>
                <a href="http://discord.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-discord" /> Discord
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube" /> Youtube
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook" /> Facebook
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" /> Instagram
                </a>
            </div>
            <div className="footer-copyright">
                Cosmolog is a learning plateform dedicated to everything about universe
                <br />
                &copy; {new Date().getFullYear()} Cosmolog All rights reserved
            </div>
        </footer>
    );
}

export default Footer;

