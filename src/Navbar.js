import React from 'react';
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';

const NavbarTransparent = () => {
    return (
        <nav style={{ backgroundColor: 'transparent', position: 'absolute', top: '0', width: '100%' }}>
            <div className='glow' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
            <Link to="home" spy={true} smooth={true} offset={-50} duration={500} style={{ color: '#fff', textDecoration: 'none', fontSize: '20px' }}>M ABID A.S</Link>
            <div>
             <Link to="/work" spy={true} smooth={true} duration={500} style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Work</Link>
            <Link to="/about" spy={true} smooth={true} duration={500} style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>About</Link>
            <Link to="/contact" spy={true} smooth={true} duration={500} style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavbarTransparent;
