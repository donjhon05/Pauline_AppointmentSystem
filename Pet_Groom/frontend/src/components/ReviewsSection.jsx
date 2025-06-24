import React from "react";

function ReviewsSection() {
  return (
    <section className="reviews-section">
      <h2>PAW-SOME REVIEWS</h2>
      <div className="reviews-cards">
        <div className="review-card yellow">
          <h4>Pauline'S REVIEW</h4>
          <p>Absolutely Excellent!</p>
        </div>
        <div className="review-card green">
          <h4>LIFE SAVER</h4>
          <p>PupBar has saved me a ton of trouble for my baby Max.</p>
        </div>
        <div className="review-card pink">
          <h4>Pamela'S THOUGHTS</h4>
          <p>Staff is super friendly and attentive!</p>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
