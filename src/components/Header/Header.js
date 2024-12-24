import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/logo.png'; // Ensure this path is correct
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Toggle the menu open state
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Close the menu explicitly
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close the menu when the Escape key is pressed
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
      console.log('Cleanup: Body overflow set to auto');
    };
  }, [isMenuOpen]);

  // Function to toggle language
  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang); // Persist language preference
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Hamburger Icon */}
        <button
          className="menu-icon"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={isMenuOpen}
          aria-controls="navigation-menu"
        >
          {isMenuOpen ? <IoCloseOutline /> : <HiBars3BottomLeft />}
        </button>

        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />

        {/* Navigation Menu */}
        <nav
          className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
          id="navigation-menu"
          aria-hidden={!isMenuOpen}
        >
          <ul>
            <li><a href="#aboutUs" onClick={closeMenu}>{t('header.aboutUs')}</a></li>
            <li><a href="#ourServices" onClick={closeMenu}>{t('header.ourServices')}</a></li>
            <li><a href="#ourTeam" onClick={closeMenu}>{t('header.ourTeam')}</a></li>
            <li><a href="#joinUs" onClick={closeMenu}>{t('header.joinUs')}</a></li>
            <li><a href="#contactUs" onClick={closeMenu}>{t('header.contactUs')}</a></li>
          </ul>
          {/* Mobile Language Toggle Button */}
          <button className="english-button mobile-button" onClick={toggleLanguage}>
            {t('header.switchTo')}
          </button>

          {/* Social Media Icons */}
          <div className="mobile-social-media">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              title="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              title="X (Twitter)"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              title="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </nav>

        {/* Desktop Language Toggle Button */}
        <button className="english-button desktop-button" onClick={toggleLanguage}>
          {t('header.switchTo')}
        </button>
      </div>

      {/* Overlay for full-screen menu */}
      <div className={`overlay ${isMenuOpen ? 'show' : ''}`} onClick={closeMenu} aria-hidden="true"></div>
    </header>
  );
};

export default Header;
