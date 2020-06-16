import React, { Component } from "react";
import profilePic from "../images/profile_pic.jpg";
import resume from "../images/Resume.pdf";
import './About.css'

class SigninContainer extends Component {
  render() {
    return (
      <div className="container white-bg border" id='About'>
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
                <span className='tool-tip-span'><div className='tool-tip'>LinkedIn</div><a href="https://www.linkedin.com/in/david-rospond-60054393/"><i className="fab fa-linkedin fa-3x prof-link"></i></a></span>
                <div className='tool-tip-span'><div className='tool-tip'>Github</div><a href="https://github.com/drospond"><i className="fab fa-github fa-3x prof-link"></i></a></div>
                <div className='tool-tip-span'><div className='tool-tip'>Email</div><a href="mailto:david.rospond@gmail.com?Subject="><i className="fas fa-envelope-square fa-3x prof-link"></i></a></div>
                <span className='tool-tip-span'><div className='tool-tip'>Resume</div><a href={resume}><i className="fas fa-file fa-3x prof-link"></i></a></span>
              </div>
            </div>
          </div>
          <div className="col">
            <p>
              I am a full stack web developer looking to enhance skills and
              challenge myself to become a better problem solver and leader. I
              will leverage my skills of task delegation, time management and
              product development learned as a manager in the food industry to
              produce more award worthy products. In May 2020, I earned a
              certificate in full stack web development from Georgia Tech’s
              Coding Bootcamp. I have learned and demonstrated skills in HTML,
              CSS, and Javascript to create styled, responsive web applications
              with high functionality using tools such as React, jQuery, third
              party server side APIs, MySQL, and MongoDB.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SigninContainer;
