import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { TweenMax, Power4 } from 'gsap';

const NavbarTransparent = () => {
  const [magnetActive, setMagnetActive] = useState(false);

  useEffect(() => {
    const magnets = document.querySelectorAll('.magnetic');
    magnets.forEach((magnet) => {
      magnet.addEventListener('mousemove', moveMagnet);
      magnet.addEventListener('mouseout', () => {
        setMagnetActive(false);
      });
    });
  }, []);

  const moveMagnet = (event) => {
    setMagnetActive(true);
    const magnetButton = event.currentTarget;
    const bounding = magnetButton.getBoundingClientRect();
    const strength = 20; // Reduced strength for less magnetic effect

    TweenMax.to(magnetButton, 1, {
      y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
      ease: Power4.easeOut,
    });
  };

  return (
    <nav style={{ backgroundColor: 'transparent', position: 'absolute', top: '0', width: '100%', padding: '5px' }}>
      <div className='glow' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className='magnetic' style={{ display: 'inline-block' }}>
          <Link to="home" spy={true} smooth={true} offset={-50} duration={500} style={{ color: '#fff', textDecoration: 'none', fontSize: '20px' }}>
            {magnetActive? <span style={{ transform: 'translate(5px, 5px)' }}>M ABID A.S</span> : <span>M ABID A.S</span>}
          </Link>
        </div>
        <div>
          <Link className="magnetic" to="/work" spy={true} smooth={true} duration={500} style={{ color: '#fff', textDecoration: 'none', marginRight: '1px' }}>Work</Link>
          <Link className="magnetic" to="/about" spy={true} smooth={true} duration={500} style={{ color: '#fff', textDecoration: 'none', marginRight: '1px' }}>About</Link>
          <Link className="magnetic" to="/contact" spy={true} smooth={true} duration={500} style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTransparent;
