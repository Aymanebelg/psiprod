// src/components/KhidmatonaSection/KhidmatonaSection.js
import React from 'react';
import './KhidmatonaSection.css';
import ServiceCard from '../ServiceCard/ServiceCard'; // Import the reusable ServiceCard component
import { useTranslation } from 'react-i18next';

const KhidmatonaSection = () => {
  const { t } = useTranslation();

  // Fetch services array from translations
  const services = t('khidmatonaSection.services', { returnObjects: true });

  return (
    <section className="khidmatona-section" id="ourServices">
      <h2 className="section-title2">{t('khidmatonaSection.title')}</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} points={service.points} />
        ))}
      </div>
    </section>
  );
};

export default KhidmatonaSection;
