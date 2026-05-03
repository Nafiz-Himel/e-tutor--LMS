import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";
import { useCart } from "../../hooks/useCart";
import "./CourseCard.css";

const CourseCard = ({ course, showWishlistButton = true }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { wishlist, toggleWishlist } = useCart();
  const isInWishlist = wishlist.includes(course.id);

  const handleClick = () => {
    navigate(`/courses/${course.id}`);
  };

  return (
    <div className="course-card" onClick={handleClick}>
      <div className="course-thumbnail">
        <img src={course.thumbnail} alt={course.title} />
        {showWishlistButton && (
          <button
            className={`wishlist-btn ${isInWishlist ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(course.id);
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
          <span className="course-students">({course.students.toLocaleString()} {t.courseDetail.students})</span>
        </div>
        <div className="course-price">${course.price}</div>
      </div>
    </div>
  );
};

export default CourseCard;
