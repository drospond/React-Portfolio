import React, { Component } from "react";
import profilePic from "../images/profile_pic.jpg"

class SigninContainer extends Component {
  render() {
    return (
      <div class="container white-bg border">
        <div class="row">
          <div class="col">
            <h3 class="border-bottom">About Me</h3>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <img
              src={profilePic}
              class="float-left"
              id="profile_pic"
              alt="David Rospond"
            />
            {/* update to include new skills */}
            <p>
              I am a full stack web developer looking to enhance skills and
              challenge myself to become a better problem solver and leader. I
              will leverage my skills of task delegation, time management and
              product development learned as a manager in the food industry to
              produce more award worthy products. I will earn a certificate in
              full stack web development from Georgia Tech’s Coding Bootcamp in
              May 2020. I have learned and demonstrated skills in HTML, CSS, and
              Javascript to create styled, responsive web applications with high
              functionality using tools such as jQuery and third party server
              side APIs.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SigninContainer;
