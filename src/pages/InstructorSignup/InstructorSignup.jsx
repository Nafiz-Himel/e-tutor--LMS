import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
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
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, title, expertise, bio } = formData;

    if (!name || !email || !password || !confirmPassword || !title || !expertise || !bio) {
      setError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (bio.length < 20) {
      setError("Bio must be at least 20 characters");
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
          <h1>Welcome, Instructor!</h1>
          <p>Your instructor account has been created successfully. Redirecting to your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="instructor-auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <span className="auth-logo">🎓</span>
          <h1>Become an Instructor</h1>
          <p>Share your knowledge and inspire learners worldwide.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {error && <div className="auth-error">{error}</div>}
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="Create a password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label>Title / Expertise</label>
            <input type="text" name="title" placeholder="e.g. Senior Full-Stack Developer" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Primary Expertise Area</label>
            <input type="text" name="expertise" placeholder="e.g. Web Development, Data Science" value={formData.expertise} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Bio</label>
            <textarea name="bio" placeholder="Tell students about your experience and background..." value={formData.bio} onChange={handleChange} required rows="4" />
          </div>
          <button type="submit" className="auth-btn instructor-btn">Create Instructor Account</button>
        </form>

        <p className="auth-switch">
          Not looking to teach? <a href="/signup">Sign up as a student</a>
        </p>
      </div>
    </div>
  );
};

export default InstructorSignup;
