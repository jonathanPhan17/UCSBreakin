import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  const activeState = ({ isActive }) => {
    return {
      color: isActive ? "#e63946" : "",
    };
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <Link to={"/"} className="logo">
          <img src="/public/logo-ucsbreakin.svg" alt="logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li>
            <NavLink to={"/"} className="nav-link" style={activeState}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Events"} className="nav-link" style={activeState}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Contacts"} className="nav-link" style={activeState}>
              Contacts  
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
