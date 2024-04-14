import React, { useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import background1 from './background_cover.JPG'; // Background foto untuk section 1

const Home = ({ portfolioName }) => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null); // Add ref for scrolling

  useEffect(() => {
    const options = {
      behavior: 'smooth',
      duration: 1000, // Adjust the duration to your liking
      easing: 'ease-in-out' // Adjust the easing function to your liking
    };
    section1Ref.current.scrollIntoView(options); // Scroll to section 1 when component is mounted
  }, []);
  
  return (
    <section id='home' style={{ backgroundImage: `url(${background1})`, backgroundSize: 'cover', backgroundPosition: '50% 30%', height:'100vh' }}>
      <marquee behavior="scroll" direction="right" scrollamount="15" style={{ position: 'absolute', bottom: '20px', width: '100%', color: '#fff', fontSize:'210px', fontFamily:'Raleway,sans-serif' }}>
        <span className="glowing-text">{portfolioName ? `Portfolio Name: ${portfolioName}` : '- Muhammad Abid A Syakur -'}</span>
      </marquee>

      {/* Section 1 */}
      <section ref={section1Ref} id='section1' style={{ backgroundImage: `url(${background1})`, backgroundSize: 'cover', backgroundPosition: '50% 30%', height:'100vh' }}>
        {/* Isi dari section 1 */}
      </section>

      {/* Section 2 */}
      <section ref={section2Ref} id='section2' style={{ backgroundColor: '#BA704F',color:'#000', padding: '50px 0', minHeight: '100vh' }}>
        <h2>Section 2</h2>
        {/* Isi dari section 2 */}
      </section>

      {/* Section 3 */}
      <section ref={section3Ref} id='section3' style={{ backgroundColor: '#DFA878', padding: '50px 0', minHeight: '100vh' }}>
        <h2>Section 3</h2>
        {/* Isi dari section 3 */}
      </section>
    </section>
  );
}

export default Home;