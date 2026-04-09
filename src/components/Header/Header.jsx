import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">Tropical<span>Vibes</span></div>
      
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#membership">Membership</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>

      <button className="btn-explore">Explore</button>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <>&#10005;</> : <>&#9776;</>}
      </button>
    </header>
  );
};

export default Header;