import React, { Component } from "react";
import Project from "../Components/Project/Project";
import CodeQuiz from "../images/CodeQuiz.PNG";
import Burger from "../images/EatDaBuergerScreenShot.PNG";
import NoteTaker from "../images/NoteTaker.PNG";
import springBreakers from "../images/SpringBreakers.PNG";
import steamapp from "../images/steamapp.PNG";
import WeatherDashboard from "../images/WeatherDashboard.PNG";

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
          <Project title="Spring Breakers" imageSource={springBreakers} repoLink="https://github.com/drospond/springBreakers/" deployedLink="https://drospond.github.io/springBreakers/"/>
          <Project title="Weather Dashboard" imageSource={WeatherDashboard} repoLink="https://github.com/drospond/Weather-Dashboard" deployedLink="https://drospond.github.io/Weather-Dashboard/"/>
        </div>
        <div className="row d-flex justify-content-center">
          <Project title="Eat Da Burger" imageSource={Burger} repoLink="https://github.com/drospond/Eat-Da-Burger" deployedLink="https://vast-springs-71096.herokuapp.com/"/>
          <Project title="Code Quiz" imageSource={CodeQuiz} repoLink="https://github.com/drospond/JavaScript-Code-Quiz" deployedLink="https://drospond.github.io/JavaScript-Code-Quiz/"/>
        </div>
        <div className="row d-flex justify-content-center">
          <Project title="Note Taker" imageSource={NoteTaker} repoLink="https://github.com/drospond/Note-Taker" deployedLink="https://apricot-pie-88422.herokuapp.com/"/>
          <Project title="Steam Games Compare" imageSource={steamapp} repoLink="https://github.com/drospond/project-2" deployedLink="https://steam-comparison.herokuapp.com/"/>
        </div>
      </div>
    );
  }
}

export default Portfolio;
