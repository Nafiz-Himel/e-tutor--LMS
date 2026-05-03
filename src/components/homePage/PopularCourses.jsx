import React from "react";
import "./PopularCourses.css";
import courses from "../../data/courses";
import CourseCard from "../CourseCard/CourseCard";

const PopularCourses = () => {
  const popularCourses = courses.slice(0, 6);

  return (
    <div className="popular-courses-section">
      <div className="section-header">
        <h2>Popular Courses</h2>
        <p>Explore our most enrolled courses</p>
      </div>
      <div className="courses-grid">
        {popularCourses.map((course) => (
          <CourseCard key={course.id} course={course} showWishlistButton={false} />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
