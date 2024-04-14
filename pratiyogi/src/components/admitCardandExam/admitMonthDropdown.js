import React from "react";
// import "../../css/admitcardsandexam.css";
import ExamSection from "./ExamSection";

const Dropdowns = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="dropdown-container">
      {months.map((month, index) => (
        <div key={index} className="dropdown">
          <details open={index === 0}>
            <summary className="month-name">{month}-2024</summary>
            <div className="MonthDetail">
            <ExamSection/>
            </div>
          </details>
        </div>
      ))}
    </div>
  );
};

export default Dropdowns;
