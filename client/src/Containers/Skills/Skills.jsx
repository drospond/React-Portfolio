import React, { Component } from "react";
import './Skills.css';

class Skills extends Component {
  render(props) {
    return (
      <div className="container white-bg border" id="Skills">
        <div className="row">
          <div className="col">
            <h3 className="border-bottom">Skills</h3>
            <ul className='skill-list'>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>React</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>jQuery</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>JavaScript</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>MySQL</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>Sequelize</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>Node.js</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>Express</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>HTML</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>CSS</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>3rd party API</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>jsonwebtoken</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>Handlebars</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
