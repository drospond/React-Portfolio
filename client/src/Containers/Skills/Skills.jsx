import React, { Component } from "react";
import './Skills.css';

class Skills extends Component {
  render(props) {
    return (
      <div className="container white-bg border" id="Skills">
        <div className="row">
          <div className="col">
            <h3 className="border-bottom">Skills</h3>
            <p>Select a skill to view relevant projects.</p>
            <ul className='skill-list'>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>React</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>Redux</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>jQuery</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>JavaScript</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>MySQL</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>Sequelize</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>MongoDB</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>Node.js</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>Express</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>HTML</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>CSS</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>Sass</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>3rd party API</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>jsonwebtoken</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>bcrypt</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>Handlebars</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>socket.io</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>Wordpress</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>PHP</li>
                <li className='skill-item' onClick={(event) => this.props.filterBySkill(event)}>DynamoDB</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
