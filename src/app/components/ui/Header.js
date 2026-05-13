import React from "react";

export default function Header() {
  return (
    <div className="header-nav">
      <a href="#" className="nav-logo">
        ROBO<span>TITANS</span>
      </a>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Our Team</a>
        </li>
        <li>
          <a href="#">Our Journey</a>
        </li>
        <li>
          <a href="#">Our Robot</a>
        </li>
        <li>
          <a href="#" className="active">
            Sponsorship
          </a>
        </li>
      </ul>
    </div>
  );
}
