import React from "react";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import logo from '../Assets/images/Logo_P.gif';



const Navbar = () => {
    
    const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };

    const linkStyle = {
        color: isHover ? 'blue' : '#000000',
        padding: '10px',
        textDecoration: 'none'
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                
                <div className="">
                <img className="" src={logo} alt='logo' style={{maxWidth: '50px'}} />
                </div>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                        <NavLink to={'/'} style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                            Home
                        </NavLink>
                    </li>
                   
                    <li className="nav-item">
                        <NavLink to={'/about'} style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            About Me
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/work'} style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                            My Work
                        </NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink to={'/contact'} style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                            Contact
                        </NavLink>
                    </li>
                    
                </ul>
                <span className="icons">
                        <a className="p-2" href="https://www.instagram.com/paolabramlett/" target="_blank" rel="noreferrer" style={{color: '#000000'}}><i
                        className="fab fa-instagram"></i></a>
                        <a className="p-2" href="https://www.linkedin.com/in/paolabramlett/" target="_blank" rel="noreferrer" style={{color: '#000000'}}><i
                        className="fab fa-linkedin"></i></a>
                        <a className="p-2" href="https://github.com/paolabramlett" target="_blank" rel="noreferrer" style={{color: '#000000'}}><i
                        className="fab fa-github"></i></a>
                </span>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;