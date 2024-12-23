// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nabda3anaSection from './components/Nabda3anaSection/Nabda3anaSection';
import KhidmatonaSection from './components/KhidmatonaSection/KhidmatonaSection';
import Fari9onaSection from './components/Fari9onaSection/Fari9onaSection';
import IndamIlaynaSection from './components/IndamIlaynaSection/IndamIlaynaSection'; // Import the new section
import TawasalMa3anaSection from './components/TawasalMa3anaSection/TawasalMa3anaSection'; // Import the new section
import mainImage from './assets/main-image.png'; 
import Footer from './components/Footer/Footer'; 
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <img src={mainImage} alt="Main" className="main-image" loading="lazy" />
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
