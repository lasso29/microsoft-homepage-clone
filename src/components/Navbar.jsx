import React from "react";
import "./Navbar.css";
import microsoftLogo from "../assets/RE1Mu3b.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-content-left">
          <img src={microsoftLogo} alt="Microsoft" className="microsoft-logo" />

        <ul className="nav-list">
          <li>
            <a href="">Microsoft 365</a>
          </li>
          <li>
            <a href="">Office</a>
          </li>
          <li>
            <a href="">Azure</a>
          </li>
          <li>
            <a href="">Copilot</a>
          </li>
          <li>
            <a href="">Windows</a>
          </li>
          <li>
            <a href="">XBOX</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
        </ul>
        </div>

        <div className="nav-content-right">
          <ul>
            <li>
              <a href="">All Microsoft</a>
            </li>
          </ul>

          <div className="nav-icon-container">
            <i class="fa-solid fa-magnifying-glass nav-icon"></i>
            <i class="fa-solid fa-cart-shopping nav-icon"></i>
            <div className="profile-container">
              ME
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
