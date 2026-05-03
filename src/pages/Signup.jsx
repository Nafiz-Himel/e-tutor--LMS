import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useLanguage } from "../hooks/useLanguage";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError(t.signup.errorAllFields);
      return;
    }
    if (password !== confirmPassword) {
      setError(t.signup.errorPasswords);
      return;
    }
    signup(name, email, password);
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <span className="auth-logo">🎓</span>
          <h1>{t.signup.heading}</h1>
          <p>{t.signup.subheading}</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {error && <div className="auth-error">{error}</div>}
          <div className="form-group">
            <label>{t.signup.fullName}</label>
            <input
              type="text"
              placeholder={t.signup.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>{t.signup.email}</label>
            <input
              type="email"
              placeholder={t.signup.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>{t.signup.password}</label>
            <input
              type="password"
              placeholder={t.signup.passwordPlaceholder}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>{t.signup.confirmPassword}</label>
            <input
              type="password"
              placeholder={t.signup.confirmPasswordPlaceholder}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-btn">{t.signup.btnCreate}</button>
        </form>

        <p className="auth-switch">
          {t.signup.haveAccount} <a href="/login">{t.signup.signin}</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
