import React from "react";
import "./Testimonials.css";
import testimonials from "../../data/testimonials";

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <div className="section-header">
        <h2>What Our Students Say</h2>
        <p>Real feedback from real learners</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.id}>
            <div className="testimonial-header">
              <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
              <div>
                <h4 className="testimonial-name">{t.name}</h4>
                <p className="testimonial-role">{t.role}</p>
              </div>
            </div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-stars">
              {"★".repeat(t.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
