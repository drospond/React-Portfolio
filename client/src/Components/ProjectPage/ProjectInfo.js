class Project {
  constructor(name, description, tech, github, deployed) {
    this.name = name;
    this.description = description;
    this.tech = tech;
    this.github = github;
    this.deployed = deployed;
  }
}

const friendlyFire = new Project(
  "Friendly Fire",
  "A social networking app for gamers. Add the games you own through the rawg API then search for and add friends that own the same games.",
  ['React', 'JavaScript', 'MySQL', 'Sequelize', 'Node.js', 'Express', 'HTML', 'CSS', 'Materialize CSS', '3rd party API', 'jsonwebtoken'],
  'https://github.com/drospond/FriendlyFire',
  'https://frozen-savannah-80275.herokuapp.com/'
);

const steamGamesCompare = new Project(
    "Steam Games Compare",
    "Enter any Steam user's vanity URL to discover their games. Enter your vanity URL and another user's to discover the games you have in common. Fully Responsive. Uses the Steam API for game info.",
    ['JavaScript', 'MySQL', 'Sequelize', 'Node.js', 'Express', 'HTML', 'CSS', 'Bulma CSS', '3rd party API', 'Handlebars'],
    'https://github.com/drospond/project-2',
    'https://steam-comparison.herokuapp.com/'
  );

  const codeQuiz = new Project(
    "Code Quiz",
    "Mobile responsive JavaScript code quiz built with vanilla JavaScript.",
    ['JavaScript', 'HTML', 'CSS', 'Bootstrap CSS'],
    'https://github.com/drospond/JavaScript-Code-Quiz',
    'https://drospond.github.io/JavaScript-Code-Quiz/'
  );

  const weatherDashboard = new Project(
    "Weather Dashboard",
    "Find the weather for any city displayed in a user friendly dashboard. The last city seached is saved in local storge to be loaded the next time the app is opened.",
    ['JavaScript', 'HTML', 'CSS', 'Bootstrap CSS', '3rd party API'],
    'https://github.com/drospond/Weather-Dashboard',
    'https://drospond.github.io/Weather-Dashboard/'
  );

  const noteTaker = new Project(
    "Note Taker",
    "Create, edit, and delete notes to help you keep track of your thoughts. Built with full CRUD functionality",
    ['JavaScript', 'Node.js', 'Express', 'HTML', 'CSS', 'jQuery'],
    'https://github.com/drospond/Note-Taker',
    'https://apricot-pie-88422.herokuapp.com/'
  );

  const springBreakers = new Project(
    "Spring Breakers",
    "Find cheap hotels and the best eats for your next Spring Break trip.",
    ['JavaScript', 'HTML', 'CSS', '3rd party API', 'jQuery'],
    'https://github.com/drospond/springBreakers/',
    'https://drospond.github.io/springBreakers/'
  );

let projectList = [friendlyFire, steamGamesCompare, codeQuiz, weatherDashboard, noteTaker, springBreakers];

export default projectList;
