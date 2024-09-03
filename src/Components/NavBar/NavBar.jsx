import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <Link to={"/"} className="logo">
          UCSBreakin
        </Link>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li>
            <Link to={"/"} className="nav-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to={"/Events"} className="nav-link">
              Events
            </Link>
          </li>
          <li>
            <Link to={"/Contacts"} className="nav-link">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
