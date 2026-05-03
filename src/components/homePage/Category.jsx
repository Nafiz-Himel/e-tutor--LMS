import React from "react";
import "./Category.css";
import categories from "../../data/categories";
import { Link } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";

const Category = () => {
  const { t } = useLanguage();

  return (
    <div className="category-section">
      <div className="para-category">
        <h1 className="heading-para-category">{t.category.heading}</h1>
      </div>
      <div className="grid-section">
        {categories.map((cat) => (
          <Link to={`/courses?category=${cat.name}`} className="grid label" key={cat.id}>
            <div className="label-icon">
              <img src={`/heroIconImg/${cat.icon}`} alt={cat.name} />
            </div>
            <div className="label-para">
              <h4 className="label-para-one">{cat.name}</h4>
              <p>{cat.courseCount.toLocaleString()} {t.category.coursesSuffix}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text">
        <p className="text-para">{t.category.moreText}</p>
        <button className="btn">{t.category.browseAll} <span className="hero-arrow">→</span></button>
      </div>
    </div>
  );
};

export default Category;
