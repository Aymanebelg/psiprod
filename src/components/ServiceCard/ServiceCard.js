// src/components/ServiceCard/ServiceCard.js
import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, points }) => {
  return (
    <div className="service-card">
      <h3 className="service-title">{title}</h3>
      <ul className="service-list">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
