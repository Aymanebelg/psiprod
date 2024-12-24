// src/components/Nabda3anaSection/Nabda3anaSection.js
import React from 'react';
import './Nabda3anaSection.css';
import { useTranslation } from 'react-i18next';

const Nabda3anaSection = () => {
  const { t } = useTranslation();

  return (
    <section className="nabda3ana-section" id="aboutUs">
      <h2 className="section-title1">{t('nabda3anaSection.title')}</h2>
      <p className="section-paragraph">
        {t('nabda3anaSection.paragraph')}
      </p>
    </section>
  );
};

export default Nabda3anaSection;
