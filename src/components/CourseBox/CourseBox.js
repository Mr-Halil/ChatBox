import React from "react";
import "./CourseBox.css";

function CourseBox({ x, y, courseName }) {
  return (
    <div
      className="course-box"
      style={{
        top: `${y}px`,
        left: `${x}px`,
      }}
    >
      <div className="course-box-inner">
        <img
          src="https://via.placeholder.com/100"
          alt="Course Icon"
          className="course-icon"
        />
        <p className="course-name">{courseName}</p>
      </div>
    </div>
  );
}

export default CourseBox;
