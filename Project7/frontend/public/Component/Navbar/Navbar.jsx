import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = ({ isOpen, toggle }) => {
    const clickHandler = () => {
        toggle();
        window.scrollTo(0, 0);
    }
    const toggleClass = isOpen ? 'show' : 'hide';
    return (
        <div className='Navbar'>
           <ul>
           <ul className='sidebar-menu'>
                <li><Link to="/home" onClick={clickHandler} >Home</Link></li>
                <li><Link to="/Bollywood" onClick={clickHandler} >Bollywood</Link></li>
                <li><Link to="/Technology" onClick={clickHandler} >Technology</Link></li>
                <li><Link to="/Hollywood" onClick={clickHandler} >Hollywood</Link></li>
                <li><Link to="/Travel" onClick={clickHandler} >Travel</Link></li>
                <li><Link to="/Food" onClick={clickHandler} >Food</Link></li>
            </ul>
           </ul>
        </div>
    )
}

export default Navbar;