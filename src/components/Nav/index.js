import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

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
          >
            Home
          </Link>
        </li>
        <li class="item">
          <Link
            to="/"
            className={
              window.location.pathname === "/upload"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li class="item">
          <Link
            to="/"
            className={
              window.location.pathname === "/manual"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li class="item">
          <Link
            to="/"
            className={
              window.location.pathname === "/login"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li class="item">
          <Link
            to="/"
            className={
              window.location.pathname === "/signup"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
