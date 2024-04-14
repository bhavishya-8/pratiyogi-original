import React, { Component, useState } from "react";
// import NewBatches from '../pages/newBatches/newBatches'
// import "../../css/nav.css"
function Nav(props) {
  const changePage = () => {
    props.passFun()
  }

  const openAbout = () => {
    props.para()
  }
  return (
  
  <header className="header">
    <a
      style={{ "margin-left": "27px", cursor: "pointer" }}
      href="#"
      className="logo"
    >
      <img
        src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr"
        alt=""
      />
    </a>
    <nav>
      <ul className="menu-items">
        <li>
          <a href="/" className="menu-item-1">
            HOME
          </a>
        </li>
        <li>
          <a href="/newbatches" className="menu-item-2">
            NEW BATCHES
          </a>
        </li>
        <li>
          <a href="/admit-card-exams" className="menu-item-3">
            ADMIT CARD/EXAMS
          </a>
        </li>
        <li>
          <a href="#" className="menu-item-4">
            INSTITUTES
          </a>
        </li>
        <li>
          <a href="#" className="menu-item-5">
            RESULTS
          </a>
        </li>
        <li>
          <a href="/about" className="menu-item-5">
            ABOUT
          </a>
        </li>
      </ul>
    </nav>
    <div className="search-div">
      <img
        id="searchpng"
        src="https://image.flaticon.com/icons/png/128/49/49116.png"
        alt=""
      />

      <input type="text" placeholder="Search for Institute, Results and more" />
    </div>

    <div className="dropbtn">
      <button>Login</button>
    </div>
  </header>
);
}
export default Nav;
