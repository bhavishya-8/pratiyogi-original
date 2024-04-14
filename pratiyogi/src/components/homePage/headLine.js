import React from "react";
// import "../../css/home.css";
function HeadLine() {
  return (
    <div style={{"display": "flex", "justify-content": "center", "align-items": "center", "margin-top":"100px"}}>
      <marquee behavior="scroll" direction="left" scrollamount="3" style={{"width":"500px"}}>
        <a href="#">● Upcoming UPSC 2024 Results</a>
        <a href="#">● Admit Card SSC 2024</a>
        <a href="#">● JEE Admit Card 2024</a>
      </marquee>
    </div>
  );
}

export default HeadLine;
