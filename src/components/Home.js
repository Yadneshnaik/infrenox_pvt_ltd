import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our IT Consultancy</h1>
          <p>We offer top-notch IT services to help your business thrive in the digital world.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Our Key Features</h2>
        <div className="features">
          <div className="feature">
            <h3>Custom Solutions</h3>
            <p>Tailored IT solutions designed to meet your specific business needs.</p>
          </div>
          <div className="feature">
            <h3>Expert Team</h3>
            <p>Our team of experts is dedicated to providing the best IT support and consultancy.</p>
          </div>
          <div className="feature">
            <h3>24/7 Support</h3>
            <p>Round-the-clock support to ensure your IT systems are always running smoothly.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
