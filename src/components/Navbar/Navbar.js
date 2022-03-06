import React from 'react';
import './Navbar.css';


function Navbar(){

    return (
        <nav className="main-container">
            <div className="Title">Social Clone</div>

            <div className="nav-links">
                <ul className="navlist">
                    <li className="link">Home</li>
                    <li className="link">Search</li>
                    <li className="link">Profile</li>
                    <li className="signin-link">Sign In</li>
                </ul>
            </div>

        </nav>
    )
} 
export default Navbar;