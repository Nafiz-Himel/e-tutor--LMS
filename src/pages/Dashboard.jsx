import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";
import CourseCard from "../components/CourseCard/CourseCard";
import courses from "../data/courses";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { cartItems, wishlist, removeFromCart, toggleWishlist } = useCart();
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
          My Courses ({cartItems.length})
        </button>
        <button className={activeTab === "wishlist" ? "active" : ""} onClick={() => setActiveTab("wishlist")}>
          Wishlist ({wishlist.length})
        </button>
        <button className={activeTab === "profile" ? "active" : ""} onClick={() => setActiveTab("profile")}>
          Profile
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === "courses" && (
          <div className="tab-content">
            <h2>My Enrolled Courses</h2>
            {cartItems.length > 0 ? (
              <div className="courses-grid">
                {cartItems.map((course) => (
                  <div key={course.id} className="enrolled-course">
                    <CourseCard course={course} showWishlistButton={false} />
                    <button className="remove-btn" onClick={() => removeFromCart(course.id)}>Remove</button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>You haven't enrolled in any courses yet.</p>
                <Link to="/courses" className="browse-link">Browse Courses</Link>
              </div>
            )}
          </div>
        )}

        {activeTab === "wishlist" && (
          <div className="tab-content">
            <h2>My Wishlist</h2>
            {wishlistedCourses.length > 0 ? (
              <div className="courses-grid">
                {wishlistedCourses.map((course) => (
                  <CourseCard key={course.id} course={course} isWishlisted={true} onToggleWishlist={toggleWishlist} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>Your wishlist is empty.</p>
                <Link to="/courses" className="browse-link">Browse Courses</Link>
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
