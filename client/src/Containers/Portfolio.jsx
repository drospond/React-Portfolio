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
          <Project title="Steam Games Compare" imageSource={steamapp} repoLink="https://github.com/drospond/project-2" deployedLink="https://steam-comparison.herokuapp.com/"/>
          <Project title="Friendly Fire" imageSource={friendyfire} repoLink="https://github.com/drospond/FriendlyFire" deployedLink="https://secure-tor-59417.herokuapp.com/"/>
        </div>
        <div className="row d-flex justify-content-center">
          <Project title="Code Quiz" imageSource={CodeQuiz} repoLink="https://github.com/drospond/JavaScript-Code-Quiz" deployedLink="https://drospond.github.io/JavaScript-Code-Quiz/"/>
          <Project title="Weather Dashboard" imageSource={WeatherDashboard} repoLink="https://github.com/drospond/Weather-Dashboard" deployedLink="https://drospond.github.io/Weather-Dashboard/"/>
        </div>
        <div className="row d-flex justify-content-center">
          <Project title="Note Taker" imageSource={NoteTaker} repoLink="https://github.com/drospond/Note-Taker" deployedLink="https://apricot-pie-88422.herokuapp.com/"/>
          <Project title="Spring Breakers" imageSource={springBreakers} repoLink="https://github.com/drospond/springBreakers/" deployedLink="https://drospond.github.io/springBreakers/"/>
        </div>
      </div>
    );
  }
}

export default Portfolio;
