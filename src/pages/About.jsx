import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About E-Tutor</h1>
        <p>Empowering learners worldwide with expert-led online education</p>
      </div>

      <div className="about-content">
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>At E-Tutor, our mission is to make high-quality education accessible to everyone, anywhere, anytime. We connect expert instructors with eager learners to foster growth, creativity, and professional development.</p>
        </section>

        <section className="stats-section">
          <div className="stat-card">
            <h3>10,000+</h3>
            <p>Online Courses</p>
          </div>
          <div className="stat-card">
            <h3>50,000+</h3>
            <p>Active Students</p>
          </div>
          <div className="stat-card">
            <h3>500+</h3>
            <p>Expert Instructors</p>
          </div>
          <div className="stat-card">
            <h3>95%</h3>
            <p>Satisfaction Rate</p>
          </div>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <p>We're a dedicated group of educators, technologists, and lifelong learners committed to transforming online education.</p>
        </section>
      </div>
    </div>
  );
};

export default About;
