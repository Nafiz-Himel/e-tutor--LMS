import "./Logo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHeart,
  faCartShopping,
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useCart } from "../../hooks/useCart";
import courses from "../../data/courses";

const Logo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const { wishlist, cartItems } = useCart();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (user) {
      logout();
    } else {
      navigate("/login");
    }
  };

  const coursesByCategory = courses.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  return (
    <div className="logo-sec">
      <Link to="/" className="logo">
        <span className="logo-icon">🎓</span>
        <h1>E-tutor</h1>
      </Link>

      <div className="browse-box" onClick={() => setIsOpen(!isOpen)}>
        <span>Browse</span>
        <span className="arrow">
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
        {isOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-grid">
              {Object.entries(coursesByCategory).map(([category, categoryCourses]) => (
                <div key={category} className="dropdown-category">
                  <h4 className="dropdown-category-title">{category}</h4>
                  <ul className="dropdown-course-list">
                    {categoryCourses.map((course) => (
                      <li key={course.id}>
                        <Link to={`/courses/${course.id}`} onClick={() => setIsOpen(false)}>
                          {course.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="search-box">
        <span className="search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input type="text" placeholder="What do you want learn..." />
      </div>

      <div className="icons">
        <span className="icon" title="Notifications">
          <FontAwesomeIcon icon={faBell} />
        </span>
        <Link to="/dashboard" className="icon" title="Wishlist">
          <FontAwesomeIcon icon={faHeart} />
          {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
        </Link>
        <Link to="/dashboard" className="icon" title="Cart">
          <FontAwesomeIcon icon={faCartShopping} />
          {cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
        </Link>
      </div>

      <div className="btn">
        <ul className="btn-lists">
          {user ? (
            <li className="btn-signin">
              <a href="#" onClick={(e) => { e.preventDefault(); handleAuthClick(); }}>Sign Out</a>
            </li>
          ) : (
            <>
              <li className="btn-create">
                <Link to="/signup">Create Account</Link>
              </li>
              <li className="btn-signin">
                <Link to="/login">Sign In</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Logo;
