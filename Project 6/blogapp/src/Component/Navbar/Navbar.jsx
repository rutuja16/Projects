import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav'>
            <ul className='nav-menu'>
                <li><NavLink to="/home" data-hover='Home'>Home</NavLink></li>
                <li><NavLink to="/Bollywood" data-hover='Bollywood'>Bollywood</NavLink></li>
                <li><NavLink to="/Technology" data-hover='Technology'>Technology</NavLink></li>
                <li><NavLink to="/Hollywood" data-hover='Hollywood' >Hollywood</NavLink></li>
                <li><NavLink to="/Travel" data-hover='Travel'>Travel</NavLink></li>
                <li><NavLink to="/Food" data-hover='Food'>Food</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;