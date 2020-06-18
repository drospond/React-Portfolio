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
import Skills from "./Skills/Skills";
import $ from 'jquery';
import './Portfolio.css';

class Portfolio extends Component {
  state = {
    project: {
      tech: [0, 1, 2],
    },
    projectSelected: false,
    projectsRendered: projectList.map((project) => project.name),
  };

  divToFocus = React.createRef();

  componentDidMount() {
    this.navToPortfolio();
  } 

  navToPortfolio() {
		$("#Skills").click(function () {
			$("html, body").animate(
				{
					scrollTop: $("#Portfolio").offset().top,
				},
				1000
			);
		});
  }

  renderProject = (projectTitle) => {
    const selectedProject = projectList.filter(
      (project) => project.name === projectTitle
    )[0];
    this.setState({
      projectSelected: true,
      project: selectedProject,
    });
    setTimeout(() => {
      this.divToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 100);
  };

  filterBySkill = (event) => {
    console.log(event.target.textContent);
    const skill = event.target.textContent;
    const projectsWithSkill = projectList
      .filter((project) => project.tech.includes(skill))
      .map((project) => project.name);
    this.setState({
      projectsRendered: projectsWithSkill
    });
  };

  clearFilter = () => {
    this.setState({
      projectsRendered: projectList.map((project) => project.name)
    })
  }

  render() {
    return (
      <>
        <Skills filterBySkill={this.filterBySkill} />
        <div className="container white-bg border" id="Portfolio">
          <div className="row">
            <div className="col">
              <h3 className="border-bottom">Portfolio <button className='btn btn-primary' id='clear-filter' onClick={this.clearFilter}>Clear Filter</button></h3>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            {this.state.projectsRendered.includes("Steam Games Compare") && (
              <Project
                title="Steam Games Compare"
                imageSource={steamapp}
                repoLink="https://github.com/drospond/project-2"
                description="Find out what steam games you have in common with your friends."
                renderProject={this.renderProject}
              />
            )}
            {this.state.projectsRendered.includes("Friendly Fire") && (
              <Project
                title="Friendly Fire"
                imageSource={friendyfire}
                repoLink="https://github.com/drospond/FriendlyFire"
                description="The social networking app for gamers. Find friends for the games you wnat to play."
                renderProject={this.renderProject}
              />
            )}
            {this.state.projectsRendered.includes("Note Taker") && (
              <Project
                title="Note Taker"
                imageSource={NoteTaker}
                repoLink="https://github.com/drospond/Note-Taker"
                description="Create, edit, and delete notes to help you keep track of your thoughts."
                renderProject={this.renderProject}
              />
            )}
            {this.state.projectsRendered.includes("Code Quiz") && (
              <Project
                title="Code Quiz"
                imageSource={CodeQuiz}
                repoLink="https://github.com/drospond/JavaScript-Code-Quiz"
                description="Test your knowledge of JavaScript against the clock and try to get the high score."
                renderProject={this.renderProject}
              />
            )}
            {this.state.projectsRendered.includes("Weather Dashboard") && (
              <Project
                title="Weather Dashboard"
                imageSource={WeatherDashboard}
                repoLink="https://github.com/drospond/Weather-Dashboard"
                description="Find the weather for any city displayed in a user friendly dashboard"
                renderProject={this.renderProject}
              />
            )}
            {this.state.projectsRendered.includes("Spring Breakers") && (
              <Project
                title="Spring Breakers"
                imageSource={springBreakers}
                repoLink="https://github.com/drospond/springBreakers/"
                description="Find cheap hotels and the best eats for your next Spring Break trip."
                renderProject={this.renderProject}
              />
            )}
          </div>
          {this.state.projectSelected && (
            <ProjectPage project={this.state.project} />
          )}
          <div ref={this.divToFocus}></div>
        </div>
      </>
    );
  }
}

export default Portfolio;
