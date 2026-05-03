import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useLanguage } from "../../hooks/useLanguage";
import "./InstructorSignup.css";

const InstructorSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    title: "",
    expertise: "",
    bio: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { signup } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, title, expertise, bio } = formData;

    if (!name || !email || !password || !confirmPassword || !title || !expertise || !bio) {
      setError(t.instructorSignup.errorAllFields);
      return;
    }
    if (password !== confirmPassword) {
      setError(t.instructorSignup.errorPasswords);
      return;
    }
    if (bio.length < 20) {
      setError(t.instructorSignup.errorBio);
      return;
    }

    signup(name, email, password);
    setSuccess(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  if (success) {
    return (
      <div className="instructor-auth-page">
        <div className="auth-container instructor-success">
          <span className="auth-logo">🎓</span>
          <h1>{t.instructorSignup.successTitle}</h1>
          <p>{t.instructorSignup.successText}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="instructor-auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <span className="auth-logo">🎓</span>
          <h1>{t.instructorSignup.heading}</h1>
          <p>{t.instructorSignup.subheading}</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {error && <div className="auth-error">{error}</div>}
          <div className="form-row">
            <div className="form-group">
              <label>{t.instructorSignup.fullName}</label>
              <input type="text" name="name" placeholder={t.instructorSignup.namePlaceholder} value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>{t.instructorSignup.email}</label>
              <input type="email" name="email" placeholder={t.instructorSignup.emailPlaceholder} value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>{t.instructorSignup.password}</label>
              <input type="password" name="password" placeholder={t.instructorSignup.passwordPlaceholder} value={formData.password} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>{t.instructorSignup.confirmPassword}</label>
              <input type="password" name="confirmPassword" placeholder={t.instructorSignup.confirmPasswordPlaceholder} value={formData.confirmPassword} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label>{t.instructorSignup.title}</label>
            <input type="text" name="title" placeholder={t.instructorSignup.titlePlaceholder} value={formData.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>{t.instructorSignup.expertise}</label>
            <input type="text" name="expertise" placeholder={t.instructorSignup.expertisePlaceholder} value={formData.expertise} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>{t.instructorSignup.bio}</label>
            <textarea name="bio" placeholder={t.instructorSignup.bioPlaceholder} value={formData.bio} onChange={handleChange} required rows="4" />
          </div>
          <button type="submit" className="auth-btn instructor-btn">{t.instructorSignup.btnCreate}</button>
        </form>

        <p className="auth-switch">
          {t.instructorSignup.notTeaching} <a href="/signup">{t.instructorSignup.signupStudent}</a>
        </p>
      </div>
    </div>
  );
};

export default InstructorSignup;
