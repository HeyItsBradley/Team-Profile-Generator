const { timeStamp } = require("console");
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");



const startQuestions = [
  {
    type: "input",
    message: "What is your team managers name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is your team managers employee ID?",
    name: "managerId",
  },
  {
    type: "input",
    message: "What is your team managers Email?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is your team managers office number?",
    name: "managerOffice",
  },
  {
    type: "list",
    message: "What would you like to do next?",
    choices: ["Add an engineer", "Add an intern", "Finish Build"],
    name: "menuSelect",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is your engineers name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your engineers ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your engineers Email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your engineers github?",
    name: "gitHub",
  },
  {
    type: "list",
    message: "What would you like to do next?",
    choices: ["Add an engineer", "Add an intern", "Finish Build"],
    name: "menuSelect",
  },
];

const internQuetions = [
  {
    type: "input",
    message: "What is your interns name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your interns ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your interns Email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your interns school?",
    name: "school",
  },
  {
    type: "list",
    message: "What would you like to do next?",
    choices: ["Add an engineer", "Add an intern", "Finish Build"],
    name: "menuSelect",
  },
];

function generateEngineer(data) {
  return `<div class="bg-secondary">
  <h2>${data.name}</h2>
<h3>${data.className}</h3>
<p>ID:${data.id}</p>
<p>Email:${data.email}</p>
<p>GitHub:${data.github}</p>
</div>`;
}

function engineerStart() {
  console.log("You have added an engineer");
  inquirer.prompt(engineerQuestions).then((Response) => {
    console.log(Response);
    const engineer = new Engineer(
      Response.name,
      Response.id,
      Response.email,
      "Engineer",
      Response.gitHub
    );
    let madeEngineer = generateEngineer(engineer);
    fs.appendFile("./dist/example.html", madeEngineer, (err) => {
      err ? console.error(err) : console.log("engineer was appended");
    });
    console.log(engineer);
    if (Response.menuSelect === "Finish Build") {
      return;
    } else if (Response.menuSelect === "Add an engineer") {
      engineerStart();
    } else {
      internStart();
    }
  });
}

function generateIntern(data) {
  return `<div class="bg-secondary">
  <h2>${data.name}</h2>
<h3>${data.className}</h3>
<p>ID:${data.id}</p>
<p>Email:${data.email}</p>
<p>School:${data.school}</p>
</div>`;
}

function internStart() {
  console.log("You have added an intern");
  inquirer.prompt(internQuetions).then((Response) => {
    console.log(Response);
    const intern = new Intern(
      Response.name,
      Response.id,
      Response.email,
      "Intern",
      Response.school
    );
    let madeIntern = generateIntern(intern);
    fs.appendFile("./dist/example.html", madeIntern, (err) => {
      err ? console.error(err) : console.log("intern was appended");
    });
    console.log(intern);
    if (Response.menuSelect === "Finish Build") {
      return;
    } else if (Response.menuSelect === "Add an engineer") {
      engineerStart();
    } else {
      internStart();
    }
  });
}

function writeToFile(fileName, data) {
  fs.writeFile(`./dist/${fileName}`, data, (err) => {
    err ? console.error(err) : console.log("success!");
  });
}

function generateHTML(data) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile Generator</title>
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <h1 class="text-center bg-primary p-3">My Team</h1>
    <main id="main">
      <div class="bg-secondary">
        <h2>${data.name}</h2>
        <h3>${data.className}</h3>
        <p>ID:${data.id}</p>
        <p>Email:${data.email}</p>
        <p>Office Number:${data.officeNumber}</p>
      </div>
    </main>
    <!-- JavaScript Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;
}

function init() {
  inquirer.prompt(startQuestions).then((Response) => {
    const manager = new Manager(
      Response.managerName,
      Response.managerId,
      Response.managerEmail,
      "Manager",
      Response.managerOffice
    );
    console.log(manager);
    let madeHTML = generateHTML(manager);
    writeToFile("example.html", madeHTML);

    if (Response.menuSelect === "Finish Build") {
      return;
    } else if (Response.menuSelect === "Add an engineer") {
      engineerStart();
    } else {
      internStart();
    }
  });
}

init();
