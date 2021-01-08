import React, { Component } from "react";
import "./Skills.css";

class Skills extends Component {
  render(props) {
    const skillList = [
      "React",
      "Redux",
      "jQuery",
      "JavaScript",
      "MySQL",
      "Sequelize",
      "MongoDB",
      "Node.js",
      "Express",
      "HTML",
      "CSS",
      "Sass",
      "3rd party API",
      "jsonwebtoken",
      "bcrypt",
      "socket.io",
      "Wordpress",
      "PHP",
      "DynamoDB",
    ];
    return (
      <div className="container white-bg border" id="Skills">
        <div className="row">
          <div className="col">
            <h3 className="border-bottom">Skills</h3>
            <p>Select a skill to view relevant projects.</p>
            <ul className="skill-list">
              {skillList.map((skill) => {
                return (
                  <li
                    className="skill-item"
                    onClick={(event) => this.props.filterBySkill(event)}
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
