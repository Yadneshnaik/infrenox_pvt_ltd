import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left-aligned: About Us */}
        <div className="footer-left">
          <h3>About Us</h3>
          <p>
            Infrenox Pvt Ltd provides top-notch IT solutions to help your business thrive in the digital world.
          </p>
        </div>

        {/* Right-aligned: Mail, Call, WhatsApp */}
        <div className="footer-right">
          <ul className="footer-links">
            <li>
              <a href="mailto:infrenox54@gmail.com">
                <i className="fas fa-envelope"></i> Mail Us
              </a>
            </li>
            <li>
              <a href="tel:8237852098">
                <i className="fas fa-phone"></i> Call Us
              </a>
            </li>
            <li>
              <a href="https://wa.me/8237852098" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i> WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="footer-bottom">
        <p>&copy; 2024 Infrenox Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
