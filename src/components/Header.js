import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <p className="date">2025 11 01</p>
      <h1 className="title">The<br />Marriage of</h1>
      <div className="image-section">
        <span className="side-text left">Sat, November 1st, 2025</span>
        <div className="image-container">
          <img
            src="https://i.pinimg.com/736x/05/e0/b2/05e0b2c2389215accc3a14db266881e9.jpg"
            alt="Couple"
            className="header-image"
          />
          <h2 className="names">Seokhwan and Eunbi</h2>
        </div>
        <span className="side-text right">We Invite You</span>
      </div>
      <div className="invitation">
        <p className="details">
          2025 11 01 SAT 12PM<br />
          Studio 123, Mapo, Seoul
        </p>
      </div>
    </div>
  );
}

export default Header;