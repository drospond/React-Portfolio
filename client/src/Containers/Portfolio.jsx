import React, { Component } from "react";
import Project from "../Components/Project/Project";
import CodeQuiz from "../images/CodeQuiz.PNG";
// import Burger from "../images/EatDaBuergerScreenShot.PNG";
import NoteTaker from "../images/NoteTaker.PNG";
import springBreakers from "../images/SpringBreakers.PNG";
import steamapp from "../images/steamapp.PNG";
import WeatherDashboard from "../images/WeatherDashboard.PNG";
import friendyfire from "../images/friendlyfire.PNG";

class Portfolio extends Component {
  render() {
    return (
      <div className="container white-bg border">
        <div className="row">
          <div className="col">
            <h3 className="border-bottom">Portfolio</h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <Project
            title="Steam Games Compare"
            imageSource={steamapp}
            repoLink="https://github.com/drospond/project-2"
            description="Find out what steam games you have in common with your friends."
          />
          <Project
            title="Friendly Fire"
            imageSource={friendyfire}
            repoLink="https://github.com/drospond/FriendlyFire"
            description="The social networking app for gamers. Find friends for the games you wnat to play."
          />
        </div>
        <div className="row d-flex justify-content-center">
          <Project
            title="Code Quiz"
            imageSource={CodeQuiz}
            repoLink="https://github.com/drospond/JavaScript-Code-Quiz"
            description="Test your knowledge of JavaScript against the clock and try to get the high score."
          />
          <Project
            title="Weather Dashboard"
            imageSource={WeatherDashboard}
            repoLink="https://github.com/drospond/Weather-Dashboard"
            description="Find the weather for any city displayed in a user friendly dashboard"
          />
        </div>
        <div className="row d-flex justify-content-center">
          <Project
            title="Note Taker"
            imageSource={NoteTaker}
            repoLink="https://github.com/drospond/Note-Taker"
            description="Create, edit, and delete notes to help you keep track of your thoughts."
          />
          <Project
            title="Spring Breakers"
            imageSource={springBreakers}
            repoLink="https://github.com/drospond/springBreakers/"
            description="Find cheap hotels and the best eats for your next Spring Break trip."
          />
        </div>
      </div>
    );
  }
}

export default Portfolio;
