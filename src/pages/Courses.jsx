import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./Courses.css";
import courses from "../data/courses";
import categories from "../data/categories";
import CourseCard from "../components/CourseCard/CourseCard";
import { useLanguage } from "../hooks/useLanguage";

const Courses = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("relevance");
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useLanguage();

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
    const searchFromUrl = searchParams.get("search");
    if (searchFromUrl) {
      setSearchTerm(searchFromUrl);
    }
  }, [searchParams]);

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
        <h1>{selectedCategory === "All" ? t.coursesPage.heading : selectedCategory}</h1>
        <p>{t.coursesPage.subheading}</p>
      </div>

      <div className="courses-controls">
        <input
          type="text"
          placeholder={t.coursesPage.searchPlaceholder}
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="filter-select">
          <option value="All">{t.coursesPage.allCategories}</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>{cat.name}</option>
          ))}
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="filter-select">
          <option value="relevance">{t.coursesPage.relevance}</option>
          <option value="price-low">{t.coursesPage.priceLow}</option>
          <option value="price-high">{t.coursesPage.priceHigh}</option>
          <option value="rating">{t.coursesPage.highestRated}</option>
        </select>
      </div>

      <div className="courses-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p className="no-results">{t.coursesPage.noResults}</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
