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
  const [isOpenNotif, setIsOpenNotif] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const coursesByCategory = courses.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  const notifications = [
    { id: 1, text: "New course available: React Masterclass", time: "2h ago" },
    { id: 2, text: "Your wishlist item is on sale", time: "5h ago" },
    { id: 3, text: "Welcome to E-tutor!", time: "1d ago" },
  ];

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
      </div>

      {isOpen && (
        <>
          <div className="dropdown-overlay" onClick={() => setIsOpen(false)} />
          <div className="dropdown-menu browse-modal">
            <div className="browse-modal-header">
              <h3>Browse Courses</h3>
              <button className="browse-close" onClick={() => setIsOpen(false)}>✕</button>
            </div>
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
        </>
      )}

      <div className="search-box">
        <span className="search-icon" onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input type="text" placeholder="What do you want learn..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyDown} />
      </div>

      <div className="icons">
        <div className="icon notif-icon" onClick={() => setIsOpenNotif(!isOpenNotif)} title="Notifications">
          <FontAwesomeIcon icon={faBell} />
          <span className="badge">{notifications.length}</span>
          {isOpenNotif && (
            <div className="dropdown-menu notif-dropdown">
              <h4 className="dropdown-category-title">Notifications</h4>
              <ul className="dropdown-course-list notif-list">
                {notifications.map((n) => (
                  <li key={n.id}>
                    <span className="notif-text">{n.text}</span>
                    <span className="notif-time">{n.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
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
