import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";
import { useLanguage } from "../hooks/useLanguage";
import CourseCard from "../components/CourseCard/CourseCard";
import courses from "../data/courses";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { cartItems, wishlist, removeFromCart, toggleWishlist } = useCart();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("courses");
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  const wishlistedCourses = courses.filter((c) => wishlist.includes(c.id));

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div className="user-info">
          <img src={user.avatar} alt={user.name} className="user-avatar" />
          <div>
            <h1>Welcome, {user.name}!</h1>
            <p>{user.email}</p>
          </div>
        </div>
        <button className="logout-btn" onClick={logout}>Sign Out</button>
      </div>

      <div className="dashboard-tabs">
        <button className={activeTab === "courses" ? "active" : ""} onClick={() => setActiveTab("courses")}>
          {t.dashboard.myCourses} ({cartItems.length})
        </button>
        <button className={activeTab === "wishlist" ? "active" : ""} onClick={() => setActiveTab("wishlist")}>
          {t.dashboard.wishlist} ({wishlist.length})
        </button>
        <button className={activeTab === "profile" ? "active" : ""} onClick={() => setActiveTab("profile")}>
          Profile
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === "courses" && (
          <div className="tab-content">
            <h2>{t.dashboard.myCourses}</h2>
            {cartItems.length > 0 ? (
              <div className="courses-grid">
                {cartItems.map((course) => (
                  <div key={course.id} className="enrolled-course">
                    <CourseCard course={course} showWishlistButton={false} />
                    <button className="remove-btn" onClick={() => removeFromCart(course.id)}>{t.dashboard.removeFromCart}</button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>{t.dashboard.emptyCourses}</p>
                <Link to="/courses" className="browse-link">{t.dashboard.browseCourses}</Link>
              </div>
            )}
          </div>
        )}

        {activeTab === "wishlist" && (
          <div className="tab-content">
            <h2>{t.dashboard.wishlist}</h2>
            {wishlistedCourses.length > 0 ? (
              <div className="courses-grid">
                {wishlistedCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>{t.dashboard.emptyWishlist}</p>
                <Link to="/courses" className="browse-link">{t.dashboard.browseCourses}</Link>
              </div>
            )}
          </div>
        )}

        {activeTab === "profile" && (
          <div className="tab-content">
            <h2>Profile Settings</h2>
            <div className="profile-info">
              <img src={user.avatar} alt={user.name} className="profile-avatar" />
              <div className="profile-details">
                <div className="detail-row">
                  <label>Name:</label>
                  <span>{user.name}</span>
                </div>
                <div className="detail-row">
                  <label>Email:</label>
                  <span>{user.email}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
