import React from "react";
import "./PopularCourses.css";
import courses from "../../data/courses";
import CourseCard from "../CourseCard/CourseCard";
import { useLanguage } from "../../hooks/useLanguage";

const PopularCourses = () => {
  const { t } = useLanguage();
  const popularCourses = courses.slice(0, 6);

  return (
    <div className="popular-courses-section">
      <div className="section-header">
        <h2>{t.popularCourses.heading}</h2>
        <p>{t.popularCourses.subheading}</p>
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
