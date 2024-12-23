// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nabda3anaSection from './components/Nabda3anaSection/Nabda3anaSection';
import KhidmatonaSection from './components/KhidmatonaSection/KhidmatonaSection';
import Fari9onaSection from './components/Fari9onaSection/Fari9onaSection';
import IndamIlaynaSection from './components/IndamIlaynaSection/IndamIlaynaSection';
import TawasalMa3anaSection from './components/TawasalMa3anaSection/TawasalMa3anaSection';
import mainImage from './assets/main-image.png'; 
import mainImageResp from './assets/main-image-resp.png'; 
import Footer from './components/Footer/Footer'; 

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <picture>
          {/* Source for responsive (mobile) devices */}
          <source srcSet={mainImageResp} media="(max-width: 768px)" />
          {/* Default image for desktop */}
          <img src={mainImage} alt="Main" className="main-image" loading="lazy" />
        </picture>
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
