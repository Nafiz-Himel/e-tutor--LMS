import React from "react";
import "./Category.css";
import categories from "../../data/categories";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="category-section">
      <div className="para-category">
        <h1 className="heading-para-category">Browse top category</h1>
      </div>
      <div className="grid-section">
        {categories.map((cat) => (
          <Link to={`/courses?category=${cat.name}`} className="grid label" key={cat.id}>
            <div className="label-icon">
              <img src={`/heroIconImg/${cat.icon}`} alt={cat.name} />
            </div>
            <div className="label-para">
              <h4 className="label-para-one">{cat.name}</h4>
              <p>{cat.courseCount.toLocaleString()} Courses</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text">
        <p className="text-para">We have more category & subcategory.</p>
        <button className="btn">Browse All <span className="hero-arrow">→</span></button>
      </div>
    </div>
  );
};

export default Category;
