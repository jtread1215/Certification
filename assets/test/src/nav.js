import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

function Goodbye() {
  alert('See ya next time');
}

function Navbar() {
  return (
    <nav id="nav">
      <ul id="menu">
        <li class="item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
            onClick= {Goodbye}
          >
            Logout
          </Link>
        </li>
        <li class="item">
          <Link
            to="/"
            className={
              window.location.pathname === "/history"
                ? "nav-link active"
                : "nav-link"
            }
          >
            View History
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;