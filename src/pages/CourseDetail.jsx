import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./CourseDetail.css";
import courses from "../data/courses";
import instructors from "../data/instructors";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));
  const instructor = instructors.find((i) => i.name === course?.instructor);

  if (!course) {
    return <div className="course-not-found">Course not found</div>;
  }

  return (
    <div className="course-detail-page">
      <div className="course-hero">
        <div className="course-hero-content">
          <span className="course-category-badge">{course.category}</span>
          <h1>{course.title}</h1>
          <p className="course-description">{course.description}</p>
          <div className="course-meta">
            <span><FontAwesomeIcon icon={faStar} className="star" /> {course.rating} ({course.students.toLocaleString()} students)</span>
            <span>Instructor: {course.instructor}</span>
          </div>
          <div className="course-price-large">${course.price}</div>
          <div className="course-actions">
            <button className="btn-enroll"><FontAwesomeIcon icon={faCartShopping} /> Enroll Now</button>
            <button className="btn-wishlist"><FontAwesomeIcon icon={faHeart} /> Add to Wishlist</button>
          </div>
        </div>
        <div className="course-thumbnail-large">
          <img src={course.thumbnail} alt={course.title} />
        </div>
      </div>

      <div className="course-body">
        <div className="curriculum-section">
          <h2>Curriculum</h2>
          <div className="curriculum-list">
            {course.curriculum.map((item, index) => (
              <div className="curriculum-item" key={index}>
                <span className="lesson-number">{index + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {instructor && (
          <div className="instructor-section">
            <h2>Your Instructor</h2>
            <div className="instructor-card-detail">
              <img src={instructor.avatar} alt={instructor.name} />
              <div>
                <h3>{instructor.name}</h3>
                <p className="instructor-title">{instructor.title}</p>
                <p>{instructor.bio}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
