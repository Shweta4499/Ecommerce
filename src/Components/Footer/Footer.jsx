import React from 'react';
import "./Footer.css";
import logo from "../../assets/logo.png";
import instagram_icon from "../../assets/instagram.png";
import facebook_icon from "../../assets/facebook.png";
import whatsapp_icon from "../../assets/whatsapp.png";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="TrendiCart Logo" height="80px" />
        <p>TrendiCart</p>
      </div>

      <ul className='footer-links'>
        <li>About</li>
        <li>Products</li>
        <li>Offices</li>
        <li>Company</li>
        <li>Contact</li>
      </ul>

      <div className='footer-social-icon'>
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="Instagram" height="30px" />
        </div>
        <div className="footer-icon-container">
          <img src={facebook_icon} alt="Facebook" height="30px" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="WhatsApp" height="30px" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>© 2023 TrendiCart. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
