import React, { Component } from "react";
import Project from "../Components/Project/Project";
import CodeQuiz from "../images/CodeQuiz.PNG";
// import Burger from "../images/EatDaBuergerScreenShot.PNG";
import NoteTaker from "../images/NoteTaker.PNG";
import springBreakers from "../images/SpringBreakers.PNG";
import steamapp from "../images/steamapp.PNG";
import WeatherDashboard from "../images/WeatherDashboard.PNG";
import friendyfire from "../images/friendlyfire.PNG";
import ProjectPage from "../Components/ProjectPage/ProjectPage";
import projectList from "../Components/ProjectPage/ProjectInfo";

class Portfolio extends Component {
  state = {
    project: {
      tech: [0, 1, 2],
    },
    projectSelected: false,
  };

  divToFocus = React.createRef();

  renderProject = (projectTitle) => {
    const selectedProject = projectList.filter(
      (project) => project.name === projectTitle
    )[0];
    this.setState({
      projectSelected: true,
      project: selectedProject,
    });
    setTimeout(()=>{
      this.divToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 100);
  };

  render() {
    return (
      <div className="container white-bg border" id='Portfolio'>
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
            renderProject={this.renderProject}
          />
          <Project
            title="Friendly Fire"
            imageSource={friendyfire}
            repoLink="https://github.com/drospond/FriendlyFire"
            description="The social networking app for gamers. Find friends for the games you wnat to play."
            renderProject={this.renderProject}
          />
          <Project
            title="Note Taker"
            imageSource={NoteTaker}
            repoLink="https://github.com/drospond/Note-Taker"
            description="Create, edit, and delete notes to help you keep track of your thoughts."
            renderProject={this.renderProject}
          />
        </div>
        <div className="row d-flex justify-content-center">
          <Project
            title="Code Quiz"
            imageSource={CodeQuiz}
            repoLink="https://github.com/drospond/JavaScript-Code-Quiz"
            description="Test your knowledge of JavaScript against the clock and try to get the high score."
            renderProject={this.renderProject}
          />
          <Project
            title="Weather Dashboard"
            imageSource={WeatherDashboard}
            repoLink="https://github.com/drospond/Weather-Dashboard"
            description="Find the weather for any city displayed in a user friendly dashboard"
            renderProject={this.renderProject}
          />
          <Project
            title="Spring Breakers"
            imageSource={springBreakers}
            repoLink="https://github.com/drospond/springBreakers/"
            description="Find cheap hotels and the best eats for your next Spring Break trip."
            renderProject={this.renderProject}
          />
        </div>
        {this.state.projectSelected && (
          <ProjectPage project={this.state.project} />
        )}
        <div ref={this.divToFocus}></div>
      </div>
    );
  }
}

export default Portfolio;
