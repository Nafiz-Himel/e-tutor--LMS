import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon">🎓</span>
            <h3>E-tutor</h3>
          </div>
          <p className="footer-desc">Learn with expert anytime, anywhere. Your journey to knowledge starts here.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><a href="/courses">Web Development</a></li>
            <li><a href="/courses">Data Science</a></li>
            <li><a href="/courses">Design</a></li>
            <li><a href="/courses">Business</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="contact-info">
            <li>📧 info@e-tutor.com</li>
            <li>📞 +1 (555) 123-4567</li>
            <li>📍 123 Learning St, Education City</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} E-tutor. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
