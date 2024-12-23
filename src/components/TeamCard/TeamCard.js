// src/components/TeamCard/TeamCard.js
import React from 'react';
import './TeamCard.css';

const TeamCard = ({ photo, name, position }) => {
  return (
    <div className="team-card">
      <img src={photo} alt={name} className="team-photo" />
      <h3 className="team-name">{name}</h3>
      <p className="team-position">{position}</p>
    </div>
  );
};

export default TeamCard;
