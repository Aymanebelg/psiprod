// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nabda3anaSection from './components/Nabda3anaSection/Nabda3anaSection';
import KhidmatonaSection from './components/KhidmatonaSection/KhidmatonaSection';
import Fari9onaSection from './components/Fari9onaSection/Fari9onaSection';
import IndamIlaynaSection from './components/IndamIlaynaSection/IndamIlaynaSection';
import TawasalMa3anaSection from './components/TawasalMa3anaSection/TawasalMa3anaSection';
import mainImage from './assets/main-image2.png'; 
import mainImageResp from './assets/main-image-resp.png'; 
import Footer from './components/Footer/Footer'; 
import './i18n';
import { useTranslation } from 'react-i18next'; // Import useTranslation

function App() {
  const { t, i18n } = useTranslation(); // Access t and i18n
  const direction = i18n.language === 'en' ? 'ltr' : 'rtl'; // Set direction based on language

  return (
    <div className="App" dir={direction}> {/* Apply direction */}
      <Header />
      <main>
        <div className="main-image-container">
          {/* Default image for desktop */}
          <img src={mainImage} alt={t('mainImageAlt')} className="main-image" loading="lazy" />
      
          <div className={`overlay-text ${direction === 'ltr' ? 'left' : 'right'}`}>
            <p className="line1">{t('mainSection.line1')}</p>
            <p className="line2">{t('mainSection.line2')}</p>
          </div>
        </div>
      </main>
      <Nabda3anaSection />
      <KhidmatonaSection />
      <Fari9onaSection />
      <IndamIlaynaSection /> 
      <TawasalMa3anaSection /> 
      <Footer /> 
    </div>
  );
}

export default App;
