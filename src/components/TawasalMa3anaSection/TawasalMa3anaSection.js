// src/components/TawasalMa3anaSection/TawasalMa3anaSection.js
import React from 'react';
import './TawasalMa3anaSection.css';
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from 'react-i18next';

const TawasalMa3anaSection = () => {
  const { t, i18n } = useTranslation();

  // Function to format phone numbers by removing spaces and hyphens
  const formatPhoneNumber = (phone) => {
    return phone.replace(/[^0-9+]/g, '');
  };

  return (
    <section className="tawasal-ma3ana-section" id="contactUs">
      <h2 className="section-title4">{t('contactUsSection.title')}</h2>

      <div className="contact-container">
        {/* Saudi Arabia Contact Card */}
        <div className="contact-card">
          <div className="contact-title">
            <div className="flag-container">
              <ReactCountryFlag
                countryCode="SA"
                svg
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                title={t('contactUsSection.saudiArabia.flagTitle')}
                aria-label={t('contactUsSection.saudiArabia.flagAriaLabel')}
              />
            </div>
            <span>{t('contactUsSection.saudiArabia.title')}</span>
          </div>
          <div className="contact-content">
            <p>{t('contactUsSection.saudiArabia.address')}</p>
            <p className="contact-details">
              {i18n.language === 'ar' ? (
                <>
                  <a href={`tel:${formatPhoneNumber(t('contactUsSection.saudiArabia.phone'))}`}>
                    {t('contactUsSection.saudiArabia.phone')}
                  </a>
                  <a href={`mailto:${t('contactUsSection.saudiArabia.email')}`}>
                    {t('contactUsSection.saudiArabia.email')}
                  </a>
                </>
              ) : (
                <>
                  <a href={`mailto:${t('contactUsSection.saudiArabia.email')}`}>
                    {t('contactUsSection.saudiArabia.email')}
                  </a>
                  <a href={`tel:${formatPhoneNumber(t('contactUsSection.saudiArabia.phone'))}`}>
                    {t('contactUsSection.saudiArabia.phone')}
                  </a>
                </>
              )}
            </p>
            <p>{t('contactUsSection.saudiArabia.commercialRegister')}</p>
          </div>
        </div>

        {/* Morocco Contact Card */}
        <div className="contact-card">
          <div className="contact-title">
            <div className="flag-container">
              <ReactCountryFlag
                countryCode="MA"
                svg
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                title={t('contactUsSection.morocco.flagTitle')}
                aria-label={t('contactUsSection.morocco.flagAriaLabel')}
              />
            </div>
            <span>{t('contactUsSection.morocco.title')}</span>
          </div>
          <div className="contact-content">
            <p>{t('contactUsSection.morocco.address')}</p>
            <p className="contact-details">
              {i18n.language === 'ar' ? (
                <>
                  <a href={`tel:${formatPhoneNumber(t('contactUsSection.morocco.phone'))}`}>
                    {t('contactUsSection.morocco.phone')}
                  </a>
                  <a href={`mailto:${t('contactUsSection.morocco.email')}`}>
                    {t('contactUsSection.morocco.email')}
                  </a>
                </>
              ) : (
                <>
                  <a href={`mailto:${t('contactUsSection.morocco.email')}`}>
                    {t('contactUsSection.morocco.email')}
                  </a>
                  <a href={`tel:${formatPhoneNumber(t('contactUsSection.morocco.phone'))}`}>
                    {t('contactUsSection.morocco.phone')}
                  </a>
                </>
              )}
            </p>
            <p>{t('contactUsSection.morocco.commercialRegister')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TawasalMa3anaSection;
