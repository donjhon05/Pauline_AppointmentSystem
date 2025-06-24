import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ReviewsSection from "../components/ReviewsSection";
import "../css/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-bg">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
    </div>
  );
}

export default LandingPage;
