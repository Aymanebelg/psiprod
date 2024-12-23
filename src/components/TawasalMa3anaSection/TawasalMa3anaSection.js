// src/components/TawasalMa3anaSection/TawasalMa3anaSection.js
import React from 'react';
import './TawasalMa3anaSection.css';
import ReactCountryFlag from "react-country-flag";

const TawasalMa3anaSection = () => {
  return (
    <section className="tawasal-ma3ana-section" id="tawasalma3ana">
      <h2 className="section-title">تواصل معنا</h2>

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
                title="المملكة العربية السعودية"
                aria-label="علم المملكة العربية السعودية"
              />
            </div>
            <span>المملكة العربية السعودية</span>
          </div>
          <div className="contact-content">
            <p>7742, سلمة بنت ثابت، 3814 حي المنار، جدة المملكة العربية السعودية.</p>
            <p className="contact-details">+966 536-353136 – info@psiprod.sa</p>
            <p>السجل التجاري : 704251958</p>
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
                title="المملكة المغربية"
                aria-label="علم المملكة المغربية"
              />
            </div>
            <span>المملكة المغربية</span>
          </div>
          <div className="contact-content">
            <p>46, الطابق الثاني، شارع الزرقطوني، حي المعاريف، الدار البيضاء 20500 –– المغرب</p>
            <p className="contact-details">+212 661-488052 – info@psiprod.ma</p>
            <p>السجل التجاري : 392243</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TawasalMa3anaSection;
