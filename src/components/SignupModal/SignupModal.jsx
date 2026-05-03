import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
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
      setError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
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
          <h2>E-tutor</h2>
          <p>Create your account and start learning today.</p>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          {error && <div className="modal-error">{error}</div>}
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <button type="submit" className="modal-submit">Create Account</button>
        </form>

        <p className="modal-switch">
          Already have an account? <a href="/login" onClick={onClose}>Sign in here</a>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
