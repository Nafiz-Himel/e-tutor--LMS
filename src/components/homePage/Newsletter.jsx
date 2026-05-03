import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <h2>Start Learning Today</h2>
        <p>Join thousands of students and start your learning journey with expert-led courses.</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe Now</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
