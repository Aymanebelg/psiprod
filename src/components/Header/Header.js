// src/components/Header/Header.js
import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png'; // Ensure this path is correct

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
         {/* Logo */}
         <img src={logo} alt="Logo" className="logo" />

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <ul>
            <li><a href="#nabda3ana">نبذة عنا</a></li>
            <li><a href="#khidmatona">خدماتنا</a></li>
            <li><a href="#fari9ona">فريقنا</a></li>
            <li><a href="#indamilayna">انضم إلينا</a></li>
            <li><a href="#tawasalma3ana">تواصل معنا</a></li>
          </ul>
        </nav>

{/* English Button */}
<button className="english-button">English</button>
       
      </div>
    </header>
  );
};

export default Header;
