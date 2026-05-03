import "./About.css";
import { useLanguage } from "../hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>{t.about.heading}</h1>
        <p>{t.about.subheading}</p>
      </div>

      <div className="about-content">
        <section className="about-text">
          <p>{t.about.para1}</p>
          <p>{t.about.para2}</p>
        </section>

        <section className="mission-section">
          <div className="mission-card">
            <h2>{t.about.ourMission}</h2>
            <p>{t.about.missionText}</p>
          </div>
          <div className="mission-card">
            <h2>{t.about.ourVision}</h2>
            <p>{t.about.visionText}</p>
          </div>
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
      </div>
    </div>
  );
};

export default About;
