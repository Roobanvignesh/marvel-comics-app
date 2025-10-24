import React from "react";
import "./Footer.css";
import marvelLogo from "../../../public/assets/Marvel_Logo.svg";

const Footer = () => {
  return (
    <footer className="footer" id="about">
      <div className="footer-bottom">
        <div className="footer-left">
          <img src={marvelLogo} alt="Marvel Logo" width="150px" />
          <p>© 2025 Marvel Comics. All Rights Reserved.</p>
        </div>
        <div className="footer-right">
          <p className="footer-credit">The Code Multiverse: Where Code Becomes Marvel <span> — by <strong> Rooban Vinsmoke</strong></span></p>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Service</a>
            <span>|</span>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
