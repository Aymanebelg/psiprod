// src/components/IndamIlaynaSection/IndamIlaynaSection.js
import React from 'react';
import './IndamIlaynaSection.css';
import { useTranslation } from 'react-i18next';

const IndamIlaynaSection = () => {
  const { t } = useTranslation();

  return (
    <section className="indam-ilayna-section" id="joinUs">
      <button className="indam-button">{t('indamIlaynaSection.buttonText')}</button>
    </section>
  );
};

export default IndamIlaynaSection;
