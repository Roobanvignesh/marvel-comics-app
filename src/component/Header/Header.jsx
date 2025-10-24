import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import marvelLogo from "../../assets/Marvel_Logo.svg";
import './Header.css';

const Header = ({setShowLogin}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={marvelLogo} alt="Marvel Logo" width="150px" />
      </div>

      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/comics">Comics</NavLink></li>
          <li><NavLink to="/genre">Genre</NavLink></li>
          <li><NavLink to="/community">Community</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
        </ul>

        <button id="comic-btn-mobile" onClick={() => setShowLogin(true)}>
          Log in
        </button>
      </nav>

      <div className="log-in">
        <button id="comic-btn" onClick={() => setShowLogin(true)}>
          Log in
        </button>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
