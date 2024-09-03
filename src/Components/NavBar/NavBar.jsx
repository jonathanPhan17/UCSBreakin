import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css"

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-row">
        <Link to={"/"} className="nav-link">
          About Us
        </Link>
        <Link to={"/Events"} className="nav-link">
          Events
        </Link>
        <Link to={"/Contacts"} className="nav-link">
          Contacts
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
