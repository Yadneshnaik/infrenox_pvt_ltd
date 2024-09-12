import React from 'react';
import './Footer.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Centered Have a Question */}
        <div className="footer-question">
          <h3>Have a Question?</h3>
        </div>

        <div className="footer-content">
          {/* Left-aligned: Location */}
          <div className="footer-location">
            <i className="fas fa-map-marker-alt"></i> Margao, Goa
          </div>

          {/* Center-aligned: Phone */}
          <div className="footer-phone">
            <i className="fas fa-phone"></i> +91 8237852098
          </div>

          {/* Right-aligned: Email */}
          <div className="footer-email">
            <i className="fas fa-envelope"></i> infrenox54@gmail.com
          </div>
        </div>
      </div>

      {/* Bottom Text: Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 All rights reserved by Infrenox Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
