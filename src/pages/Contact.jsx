import { useState } from "react";
import "./Contact.css";
import { useLanguage } from "../hooks/useLanguage";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>{t.contact.heading}</h1>
        <p>{t.contact.subheading}</p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <h2>{t.contact.ourInfo}</h2>
          <div className="info-card">
            <h3>📧 Email</h3>
            <p>{t.contact.email}</p>
          </div>
          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>{t.contact.phone}</p>
          </div>
          <div className="info-card">
            <h3>📍 Address</h3>
            <p>{t.contact.address}</p>
          </div>
        </div>

        <div className="contact-form-section">
          {submitted ? (
            <div className="success-message">
              <h3>Thank you!</h3>
              <p>{t.contact.messageSent}</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>{t.contact.yourName}</label>
                <input
                  type="text"
                  placeholder={t.contact.yourName}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t.contact.yourEmail}</label>
                <input
                  type="email"
                  placeholder={t.contact.yourEmail}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t.contact.message}</label>
                <textarea
                  placeholder={t.contact.messagePlaceholder}
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">{t.contact.sendMessage}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
