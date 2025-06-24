import React from "react";
import "../css/AboutUs.css"; // Create this file for custom styles

const services = [
  { title: "Grooming", desc: "Professional grooming for all breeds." },
  { title: "Wash Stations", desc: "Self-serve and full-service wash options." },
  { title: "Full Service", desc: "All-inclusive spa and grooming packages." },
];

const offers = [
  { title: "First Visit Discount", desc: "20% off for new customers!" },
  { title: "Loyalty Program", desc: "Earn points for every visit." },
  { title: "Referral Bonus", desc: "Refer a friend and get a free treat!" },
];

const leadership = [
  {
    name: "Pauline Ramos",
    role: "Founder & Head Groomer",
    img: "/assets/leader1.jpg",
  },
  {
    name: "Crisanta Vergara",
    role: "Operations Manager",
    img: "/assets/leader2.jpg",
  },
  {
    name: "Lotlot Ramos",
    role: "Customer Care Lead",
    img: "/assets/leader3.jpg",
  },
];

function AboutUs() {
  return (
    <div className="aboutus-page">
      <section className="aboutus-services">
        <h2>Our Services</h2>
        <div className="aboutus-flex">
          {services.map((s, i) => (
            <div className="aboutus-card" key={i}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="aboutus-offers">
        <h2>Special Offers</h2>
        <div className="aboutus-flex">
          {offers.map((o, i) => (
            <div className="aboutus-card offer" key={i}>
              <h3>{o.title}</h3>
              <p>{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="aboutus-leadership">
        <h2>Meet Our Leadership</h2>
        <div className="aboutus-leaders">
          {leadership.map((l, i) => (
            <div className="leader-card" key={i}>
              <div className="leader-img-wrapper">
                <img src={l.img} alt={l.name} className="leader-img" />
              </div>
              <h4>{l.name}</h4>
              <p>{l.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
