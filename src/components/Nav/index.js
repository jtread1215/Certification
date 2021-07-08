import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Goodbye() {
  alert('User logout');
}

function Navbar() {
  return (
    <nav id="nav">
      <ul id="menu">
        <li className="item">
          <Link
            to="/"
            className= "logout"
            
            onClick= {Goodbye}
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
