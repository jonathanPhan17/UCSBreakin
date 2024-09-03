import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css"

const NavBar = () => {
  return (
    <div className="Navbar">
      <Link to={"/"}>About Us</Link>
      <Link to={"/Events"}>Events</Link>
      <Link to={"/Contacts"}>Contacts</Link>
    </div>
  );
};

export default NavBar;
