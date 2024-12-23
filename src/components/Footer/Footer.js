// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png'; // Adjust the path if necessary

// Importing Social Media Icons from react-icons
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
           {/* Right Side: Logo */}
           <div className="footer-logo">
          <img src={logo} alt="Company Logo" />
        </div>
        {/* Left Side: Social Media Icons */}
        <div className="social-media">
         
        
        
        
         
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

     
      </div>
    </footer>
  );
};

export default Footer;
