import { useState } from "react";
import "./Courses.css";
import courses from "../data/courses";
import categories from "../data/categories";
import CourseCard from "../components/CourseCard/CourseCard";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("relevance");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses
    .filter((c) => selectedCategory === "All" || c.category === selectedCategory)
    .filter((c) => c.title.toLowerCase().includes(searchTerm.toLowerCase()) || c.instructor.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1>All Courses</h1>
        <p>Explore our collection of expert-led courses</p>
      </div>

      <div className="courses-controls">
        <input
          type="text"
          placeholder="Search courses..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="filter-select">
          <option value="All">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>{cat.name}</option>
          ))}
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="filter-select">
          <option value="relevance">Relevance</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      <div className="courses-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p className="no-results">No courses found. Try adjusting your filters.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
