import React,{useState} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [list,setlist ]=useState("list")
    const toggle = () => {
        setIsOpen(!isOpen);
        if(isOpen == true){
            setlist("list")
        }
        else{
            setlist("list_hide")
        }
    }

    if (typeof window != 'undefined' && window.document && isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        
        document.body.style.overflow = 'visible';
    }

    
    return (
        <div className='Container'>
            <div className='header'>
                <div className='title'>The <span >SIREN</span> </div>
                {
                    isOpen ? (
                        <span className="times" onClick={toggle}>
                            <i className="fa fa-bars"></i>
                        </span>
                    ) : (
                        <span className="bar" onClick={toggle}>
                            <i className="fa fa-times"></i>
                        </span>
                    )
                }
            </div>
            <div className='Navbar'>
                <ul className={list}>
                        <li><Link to="/home"  >Home</Link></li>
                        <li><Link to="/Bollywood"  >Bollywood</Link></li>
                        <li><Link to="/Technology"  >Technology</Link></li>
                        <li><Link to="/Hollywood"  >Hollywood</Link></li>
                        <li><Link to="/Travel"  >Travel</Link></li>
                        <li><Link to="/Food"  >Food</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;