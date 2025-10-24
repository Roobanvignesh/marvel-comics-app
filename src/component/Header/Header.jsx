import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import marvelLogo from "../../../public/assets/Marvel_Logo.svg";
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
  <li>
    <button
              className="scroll-link"
              onClick={() => {
                const section = document.getElementById("home");
                section.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              Home
    </button>
  </li>
  <li>
    <button
      className="scroll-link"
      onClick={() => {
        const section = document.getElementById("new-release");
        section.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }}
    >
      New Release
    </button>
  </li>
  <li>
    <button
      className="scroll-link"
      onClick={() => {
        const section = document.getElementById("explore");
        section.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }}
    >
      Explore Comic
    </button>
  </li>
  <li>
    <button
      className="scroll-link"
      onClick={() => {
        const section = document.getElementById("community");
        section.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }}
    >
      Community
    </button>
  </li>
  <li>
  <button
    className="scroll-link"
    onClick={() => {
      const section = document.getElementById("footer");
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }}
  >
    Contact
  </button>
</li>

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
