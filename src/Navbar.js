import React from 'react';

const NavbarTransparent = () => {
    return (
        <nav style={{ backgroundColor: 'transparent', position: 'absolute', top: '0', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                <a href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '20px' }}>Portfolio</a>
                <div>
                    <a href="#work" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Work</a>
                    <a href="#about" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>About</a>
                    <a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default NavbarTransparent;
