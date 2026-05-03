import React from "react";
import "./Instructors.css";
import instructors from "../../data/instructors";

const Instructors = () => {
  return (
    <div className="instructors-section">
      <div className="section-header">
        <h2>Top Instructors</h2>
        <p>Learn from industry experts</p>
      </div>
      <div className="instructors-grid">
        {instructors.slice(0, 6).map((inst) => (
          <div className="instructor-card" key={inst.id}>
            <img src={inst.avatar} alt={inst.name} className="instructor-avatar" />
            <h4 className="instructor-name">{inst.name}</h4>
            <p className="instructor-title">{inst.title}</p>
            <div className="instructor-stats">
              <span>★ {inst.rating}</span>
              <span>{inst.students.toLocaleString()} students</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
