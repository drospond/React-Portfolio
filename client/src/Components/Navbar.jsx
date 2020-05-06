import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-bottom mb-3">
      <div className="container-md">
        <div className="row">
          <div className="col-md col-sm-12 padding-to-zero">
            <nav className="navbar navbar-light teal-bg justify-content-center">
              <span className="navbar-brand mb-0 h1 text-white">David Rospond</span>
            </nav>
          </div>
          <div className="col"></div>
          <div className="col-md-6">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
