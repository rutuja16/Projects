import React, { useState } from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import FaTimes from "react-icons/fa";
import FaBars  from "react-icons/fa";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    if (typeof window != 'undefined' && window.document && isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }

    return (
        <div className='Header'>
            <div className='header-box'>
                <div className='title'>
                    <div className='the'><span>The</span></div>
                    <div className='siren'>Siren</div>
                    <span style={{color:"black"}}><i className="FaTimes"></i></span>
                </div>
                {
                    isOpen ? (
                        <span className="times" onClick={toggle}>
                            <i className="FaTimes"></i>
                        </span>
                    ) : (
                        <span className="bar" onClick={toggle}>
                            <i className="FaBars"></i>
                        </span>
                    )
                }
            </div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar />
        </div>
    )
}

export default Header;