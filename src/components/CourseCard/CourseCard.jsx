import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = ({ course, showWishlistButton = true, isWishlisted = false, onToggleWishlist }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/courses/${course.id}`);
  };

  return (
    <div className="course-card" onClick={handleClick}>
      <div className="course-thumbnail">
        <img src={course.thumbnail} alt={course.title} />
        {showWishlistButton && (
          <button
            className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist && onToggleWishlist(course.id);
            }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
        )}
      </div>
      <div className="course-info">
        <span className="course-category">{course.category}</span>
        <h3 className="course-title">{course.title}</h3>
        <p className="course-instructor">{course.instructor}</p>
        <div className="course-rating">
          <FontAwesomeIcon icon={faStar} className="star-icon" />
          <span>{course.rating}</span>
          <span className="course-students">({course.students.toLocaleString()} students)</span>
        </div>
        <div className="course-price">${course.price}</div>
      </div>
    </div>
  );
};

export default CourseCard;
