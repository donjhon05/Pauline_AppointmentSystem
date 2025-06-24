import React from "react";

function ServicesSection() {
  return (
    <section className="services-section">
      <h2>HOW WE GROOM!</h2>
      <div className="services-cards">
        <div className="service-card pink">
          <h3>GROOMING</h3>
          <p>Top-notch trims for your furry friend.</p>
          <button>LEARN MORE</button>
        </div>
        <div className="service-card blue">
          <h3>WASH STATIONS</h3>
          <p>Self-serve or full-service wash options.</p>
          <button>LEARN MORE</button>
        </div>
        <div className="service-card yellow">
          <h3>FULL SERVICE</h3>
          <p>All-inclusive spa and grooming packages.</p>
          <button>LEARN MORE</button>
        </div>
      </div>
      <div className="service-icons">
        {/* Add icons for Bath, Brush, Blow Dry, etc. */}
        <span>🛁 Bath</span>
        <span>🧼 Brush</span>
        <span>💨 Blow Dry</span>
        <span>🐾 Paw Pad Trim</span>
      </div>
    </section>
  );
}

export default ServicesSection;
