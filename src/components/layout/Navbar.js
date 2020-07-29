import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper orange accent-4">
          <Link to="/" className="brand-logo left">
            <img src={logo} alt="logo" className="logo-img responsive-img" />
            <span>SHEFATA</span>
          </Link>
          <ul className="right ">
            <li>
              <Link to="/store">Our Shop</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
