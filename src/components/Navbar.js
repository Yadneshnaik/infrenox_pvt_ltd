import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Infrenox Pvt Ltd</h1>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/services" className="nav-link">Services</Link></li>
        <li><Link to="/team" className="nav-link">Team</Link></li>
        <li><Link to="/about-us" className="nav-link">About Us</Link></li>
      </ul>
      <button className="mobile-menu-icon" onClick={handleMenuToggle}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
