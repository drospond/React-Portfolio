import React, { Component } from "react";
import resume from "../images/Resume.pdf"

class Contact extends Component {
  render() {
    return (
      <div class="container white-bg border">
        <div class="row">
          <div class="col">
            <h3 class="border-bottom">Contact</h3>
          </div>
        </div>
        <ul>
          <li>
            GitHub Profile:{" "}
            <a href="https://github.com/drospond" target="_blank" rel="noopener noreferrer">
              github.com/drospond
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/david-rospond-60054393/"
              target="_blank"
              rel="noopener noreferrer"
            >
              david-rospond-60054393
            </a>
          </li>
          <li>
            Email:{" "}
            <a href="mailto:david.rospond@gmail.com">david.rospond@gmail.com</a>
          </li>
          <li>Phone Number: (678) 343-1338</li>
          <li>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Contact;
