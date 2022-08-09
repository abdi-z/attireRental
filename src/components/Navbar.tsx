import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-items">
        <Link className="navbar-brand" to="/">
          Poshak.pk
        </Link>
        <Link to="/attires">Check out Attires</Link>
      </div>
      <div className="right-items">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
