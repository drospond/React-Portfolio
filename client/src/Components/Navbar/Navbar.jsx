import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import './Navbar.css'

class Navbar extends Component {
  componentDidMount() {
    this.navToAbout();
    this.navToSkills();
		this.navToPortfolio();
		this.navToContact();
  } 

	navToAbout() {
		$("#nav-about").click(function () {
			$("html, body").animate(
				{
					scrollTop: $("#About").offset().top,
				},
				1000
			);
		});
  }

  navToSkills() {
		$("#nav-skills").click(function () {
			$("html, body").animate(
				{
					scrollTop: $("#Skills").offset().top,
				},
				1000
			);
		});
  }
  
	navToPortfolio() {
		$("#nav-portfolio").click(function () {
			$("html, body").animate(
				{
					scrollTop: $("#Portfolio").offset().top,
				},
				1000
			);
		});
  }
  
	navToContact() {
		$("#nav-contact").click(function () {
			$("html, body").animate(
				{
					scrollTop: $("#Contact").offset().top,
				},
				1000
			);
		});
	}

  render() {
    return (
      <nav className="border-bottom mb-3">
        <div className="container-md">
          <div className="row">
            <div className="col-md col-sm-12 padding-to-zero">
              <nav className="navbar navbar-light teal-bg justify-content-center">
                <span className="navbar-brand mb-0 h1 text-white">
                  David Rospond
                </span>
              </nav>
            </div>
            <div className="col"></div>
            <div className="col-md-6">
              <ul className="nav justify-content-center">
                <Link className="nav-link" id='nav-about'>
                  <li className="nav-item">About</li>
                </Link>
                <Link className="nav-link" id='nav-skills'>
                  <li className="nav-item">Skills</li>
                </Link>
                <li className="nav-item" id='nav-portfolio'>
                  <Link className="nav-link">Portfolio</Link>
                </li>
                <li className="nav-item" id='nav-contact'>
                  <Link className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
