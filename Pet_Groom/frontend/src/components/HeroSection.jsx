import React from "react";
import "../css/HeroSection.css"; // Create this for custom styles

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-graphics">
        {/* Example SVG dog paw */}
        <svg className="paw-svg" width="60" height="60" viewBox="0 0 60 60">
          <ellipse cx="30" cy="50" rx="18" ry="10" fill="#f15bb5" />
          <circle cx="15" cy="35" r="7" fill="#f15bb5" />
          <circle cx="45" cy="35" r="7" fill="#f15bb5" />
          <circle cx="22" cy="20" r="6" fill="#f15bb5" />
          <circle cx="38" cy="20" r="6" fill="#f15bb5" />
        </svg>
        {/* EDIT TITLE HERE */}

        {/* Add more SVGs or dog images as desired */}
      </div>
      <div className="hero-content">
        <h1>
          GET YOUR <span className="hero-highlight">GROOM</span> ON
        </h1>
        <p>
          Unleash the full potential of pet pampering with PupBar—where your
          furry friend gets the VIP treatment they deserve.
        </p>
        <button className="hero-btn">BOOK NOW</button>
      </div>
    </section>
  );
}

export default HeroSection;
