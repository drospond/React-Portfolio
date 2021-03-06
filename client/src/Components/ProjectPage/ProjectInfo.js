import friendlyFireImg from "../../images/friendlyfire.PNG";
import codeQuizImg from "../../images/CodeQuiz.PNG";
import noteTakerImg from "../../images/NoteTaker.PNG";
import springBreakersImg from "../../images/SpringBreakers.PNG";
import steamImg from "../../images/steamapp.PNG";
import weatherImg from "../../images/WeatherDashboard.PNG";
import simpleGamesImg from "../../images/tictactoeScreenShot.PNG";
import atlantaScribes from "../../images/atlScribes.PNG";

class Project {
  constructor(name, description, tech, github, deployed, img) {
    this.name = name;
    this.description = description;
    this.tech = tech;
    this.github = github;
    this.deployed = deployed;
    this.img = img;
  }
}

const friendlyFire = new Project(
  "Friendly Fire",
  "A social networking app for gamers. Add the games you own through the rawg API then search for and add friends that own the same games.",
  [
    "React",
    "JavaScript",
    "MySQL",
    "Sequelize",
    "Node.js",
    "Express",
    "HTML",
    "CSS",
    "Materialize CSS",
    "3rd party API",
    "jsonwebtoken",
  ],
  "https://github.com/drospond/FriendlyFire",
  "https://frozen-savannah-80275.herokuapp.com/",
  friendlyFireImg
);

const steamGamesCompare = new Project(
  "Steam Games Compare",
  "Enter any Steam user's vanity URL to discover their games. Enter a group of users' vanity URLs to discover the games they have in common. Fully Responsive. Uses the Steam API for game info. The originall app was made with Handlebars, jQuery and Bulma CSS and can be found at https://github.com/drospond/steam-library-comparer. It has since been remade and revamped using React.js and Bootstrap.",
  [
    "JavaScript",
    "MySQL",
    "Sequelize",
    "Node.js",
    "Express",
    "HTML",
    "CSS",
    "Bootstrap",
    "3rd party API",
    "React",
    "jQuery"
  ],
  "https://github.com/drospond/games-comparison",
  "https://comparegameslibrary.herokuapp.com/",
  steamImg
);

const codeQuiz = new Project(
  "Code Quiz",
  "Mobile responsive JavaScript code quiz built with vanilla JavaScript.",
  ["JavaScript", "HTML", "CSS", "Bootstrap CSS"],
  "https://github.com/drospond/JavaScript-Code-Quiz",
  "https://drospond.github.io/JavaScript-Code-Quiz/",
  codeQuizImg
);

const weatherDashboard = new Project(
  "Weather Dashboard",
  "Find the weather for any city displayed in a user friendly dashboard. The last city seached is saved in local storge to be loaded the next time the app is opened.",
  ["JavaScript", "HTML", "CSS", "Bootstrap CSS", "3rd party API"],
  "https://github.com/drospond/Weather-Dashboard",
  "https://drospond.github.io/Weather-Dashboard/",
  weatherImg
);

const noteTaker = new Project(
  "Note Taker",
  "Create, edit, and delete notes to help you keep track of your thoughts. Built with full CRUD functionality",
  ["JavaScript", "Node.js", "Express", "HTML", "CSS", "jQuery"],
  "https://github.com/drospond/Note-Taker",
  "https://apricot-pie-88422.herokuapp.com/",
  noteTakerImg
);

const springBreakers = new Project(
  "Spring Breakers",
  "Find cheap hotels and the best eats for your next Spring Break trip.",
  ["JavaScript", "HTML", "CSS", "3rd party API", "jQuery"],
  "https://github.com/drospond/springBreakers/",
  "https://drospond.github.io/springBreakers/",
  springBreakersImg
);

const simpleGames = new Project(
  "Simple Games",
  "Play class simple game across the internet with a friend",
  ["JavaScript", "HTML", "CSS", "Sass", "Bootstrap CSS", "socket.io", "React", "Redux", "jsonwebtoken", "bcrypt", "Express", "Node.js", "MongoDB"],
  "https://github.com/drospond/simple-games",
  "https://simple-games8723.herokuapp.com/",
  simpleGamesImg
);

const atlScribes = new Project(
  "Atlanta Scribes",
  "Volunteer project through Code for Atlanta. I helped make the website in Wordpress with Beaver Builder. I also helped make a cutom plugin that allows volunteers to help tag and correct transcriptions of public comment voicemails.",
  ["Wordpress", "HTML", "CSS", "PHP", "DynamoDB"],
  "https://www.atlscribes.org/",
  "https://www.atlscribes.org/",
  atlantaScribes
);

let projectList = [
  friendlyFire,
  steamGamesCompare,
  codeQuiz,
  weatherDashboard,
  noteTaker,
  springBreakers,
  simpleGames,
  atlScribes
];

export default projectList;
