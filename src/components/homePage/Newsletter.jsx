import React, { useState } from "react";
import "./Newsletter.css";
import { useLanguage } from "../../hooks/useLanguage";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <h2>{t.newsletter.heading}</h2>
        <p>{t.newsletter.subheading}</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder={t.newsletter.placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">{t.newsletter.btnSubscribe}</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
