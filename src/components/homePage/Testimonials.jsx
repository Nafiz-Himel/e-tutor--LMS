import React from "react";
import "./Testimonials.css";
import testimonials from "../../data/testimonials";
import { useLanguage } from "../../hooks/useLanguage";

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <div className="testimonials-section">
      <div className="section-header">
        <h2>{t.testimonials.heading}</h2>
        <p>{t.testimonials.subheading}</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <div className="testimonial-header">
              <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
              <div>
                <h4 className="testimonial-name">{item.name}</h4>
                <p className="testimonial-role">{item.role}</p>
              </div>
            </div>
            <p className="testimonial-text">"{item.text}"</p>
            <div className="testimonial-stars">
              {"★".repeat(item.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
