import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    FcServices, 
    FcHome,
    FcContacts,
    FcAbout
 } from "react-icons/fc";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    // Handling the toggle icons
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        } 
    }

    window.addEventListener('resize', showButton)
    
    return (
        <>
        <IconContext.Provider value={{color: '#596bb2'}}> 
        {/* <div className="navbar"> */}
        <div className="pt-4">
            <div className="navbar-container container">
                <img href="/home__hero-row" src="images/ED logo 1x1.png" alt="engine dome logo" onClick={closeMobileMenu}  className="myLogo" />
                {/* <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <MdFingerprint className="navbar-icon" /> */}
                    {/* Engine Dome */}
                {/* </Link>  */}

                {/* This div toggles from X to Hamburger icons */}
                <div className="menu-icon" onClick={handleClick} >
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            <FcHome className="mb-1" size={20} /> Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/About' className="nav-links" onClick={closeMobileMenu}>
                        <FcAbout href="/aboutContainer" className="mb-1" size={20} /> About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Services' className="nav-links" onClick={closeMobileMenu}>
                        <FcServices className="mb-1" size={20} /> Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                            <FcContacts className="mb-1" size={20} /> Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;