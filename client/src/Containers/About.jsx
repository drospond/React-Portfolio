import React, { Component } from "react";
import profilePic from "../images/profile_pic.jpg";
import resume from "../images/Resume.pdf";
import "./About.css";

class SigninContainer extends Component {
  render() {
    return (
      <div className="container white-bg border" id="About">
        <div className="row">
          <div className="col">
            <h3 className="border-bottom">About Me</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <img
                  src={profilePic}
                  // className="float-left"
                  id="profile_pic"
                  alt="David Rospond"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <span className="tool-tip-span">
                  <div className="tool-tip">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/david-rospond-60054393/">
                    <i className="fab fa-linkedin fa-3x prof-link"></i>
                  </a>
                </span>
                <div className="tool-tip-span">
                  <div className="tool-tip">Github</div>
                  <a href="https://github.com/drospond">
                    <i className="fab fa-github fa-3x prof-link"></i>
                  </a>
                </div>
                <div className="tool-tip-span">
                  <div className="tool-tip">Email</div>
                  <a href="mailto:david.rospond@gmail.com?Subject=">
                    <i className="fas fa-envelope-square fa-3x prof-link"></i>
                  </a>
                </div>
                <span className="tool-tip-span">
                  <div className="tool-tip">Resume</div>
                  <a href={resume}>
                    <i className="fas fa-file fa-3x prof-link"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col align-self-center">
            <p className="about-description">
              I am a full stack web developer and recent grad from Georgia
              Tech's Full-Stack Web Dev Bootcamp. Eager to build and learn new
              technologies. Scroll down to find out what I know and have done so
              far!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SigninContainer;
