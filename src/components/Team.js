import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Yadnesh Naik',
      position: 'CEO & Founder',
      image: '/img/Yadnesh.jpg',
      linkedin: 'https://www.linkedin.com/in/yadnesh-naik-286a6b235/'
    },
    {
      name: 'Jane Smith',
      position: 'Co-Founder',
      image: '/img/Vaidehi.jpg',
      linkedin: '#'
    },
  ];

  return (
    <div className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <div className="social-icons">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
