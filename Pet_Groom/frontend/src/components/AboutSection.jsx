import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/AboutSection.css";
import dogSplash from "../assets/dog-splash.jpg";

function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="about-section">
      <div className="about-img">
        <svg className="about-blob" viewBox="0 0 200 200">
          <path
            fill="#fbeff5"
            d="M44.8,-67.7C56.7,-59.9,63.7,-44.2,69.2,-29.1C74.7,-14,78.7,0.6,74.2,13.7C69.7,26.8,56.7,38.3,43.2,47.6C29.7,56.9,14.8,63.9,-0.8,64.9C-16.4,65.9,-32.8,60.9,-44.2,51.1C-55.6,41.3,-62,26.7,-65.7,11.1C-69.4,-4.5,-70.4,-21.1,-62.9,-31.7C-55.4,-42.3,-39.4,-46.9,-24.7,-53.6C-10,-60.3,4.4,-69.1,19.2,-72.2C34,-75.3,49.1,-72.6,44.8,-67.7Z"
            transform="translate(100 100)"
          />
        </svg>
        <img src={dogSplash} alt="About PupBar" className="circle-img" />
      </div>
      <div className="about-content">
        <h2>ABOUT US</h2>
        <p>
          Kuma Pet Store is not just a pet grooming spot, it's a vision brought
          to life in 2023. Our team of elite stylists offer more choice and
          convenience to pet owners. Kuma Pet Store is an innovative concept
          that empowers expert groomers while creating a supportive and
          welcoming environment.
        </p>
        <button className="about-btn" onClick={() => navigate("/aboutus")}>
          LEARN MORE
        </button>
      </div>
    </section>
  );
}

export default AboutSection;
