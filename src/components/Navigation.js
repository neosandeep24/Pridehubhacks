// Navigation.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="blogs">Blogs</Link>
        </li>
        <li>
          <Link to="Stories">Stories</Link>
        </li>
        <li>
          <Link to="/History">History</Link>
          </li>
        <li>
          <Link to="education">Education</Link>
        </li>
        <li>
          <Link to="campaigns">Campaigns</Link>
        </li>
        <li>
          <Link to="/Faq">FAQ</Link>
          </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;