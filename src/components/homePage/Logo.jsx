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
            <li><Link to="/courses">Web Development</Link></li>
            <li><Link to="/courses">App Development</Link></li>
            <li><Link to="/courses">Data Science</Link></li>
            <li><Link to="/courses">UI/UX Design</Link></li>
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
