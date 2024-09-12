import React from 'react';
import './Services.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Services = () => {
  const servicesData = [
    {
      title: 'Web Development',
      description: 'Professional web development services using the latest technologies.',
      icon: 'fas fa-code',
    },
    {
      title: 'Digital Marketing',
      description: 'Increase your online presence with our expert digital marketing strategies.',
      icon: 'fas fa-bullhorn',
    },
    {
      title: 'App Development',
      description: 'Developing high-quality mobile and web applications tailored to your needs.',
      icon: 'fas fa-mobile-alt',
    },
    {
      title: 'IT Consultancy',
      description: 'Expert advice on IT infrastructure and business solutions.',
      icon: 'fas fa-network-wired',
    },
    {
      title: 'Graphic Design',
      description: 'Creative graphic design solutions for your business branding.',
      icon: 'fas fa-paint-brush',
    },
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
