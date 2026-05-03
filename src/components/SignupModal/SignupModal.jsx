import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useLanguage } from "../../hooks/useLanguage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./SignupModal.css";

const SignupModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

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
    onClose();
    navigate("/dashboard");
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="modal-header">
          <span className="modal-logo">🎓</span>
          <h2>{t.signup.heading}</h2>
          <p>{t.signup.subheading}</p>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          {error && <div className="modal-error">{error}</div>}
          <div className="form-group">
            <label>{t.signup.fullName}</label>
            <input type="text" placeholder={t.signup.namePlaceholder} value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>{t.signup.email}</label>
            <input type="email" placeholder={t.signup.emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>{t.signup.password}</label>
            <input type="password" placeholder={t.signup.passwordPlaceholder} value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>{t.signup.confirmPassword}</label>
            <input type="password" placeholder={t.signup.confirmPasswordPlaceholder} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <button type="submit" className="modal-submit">{t.signup.btnCreate}</button>
        </form>

        <p className="modal-switch">
          {t.signup.haveAccount} <a href="/login" onClick={onClose}>{t.signup.signin}</a>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
