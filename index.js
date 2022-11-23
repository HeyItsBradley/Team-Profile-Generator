const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
//prompts for the manager/starter questions for the program
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
//prompts for the engineer
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
//prompts for the inter
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
//this will take the data of the engineer and use it to create a card fo the engineer
function generateEngineer(data) {
  return `
<div class="bg-light text-center p-3 m-3 rounded">
            <h2>${data.name}</h2>
            <h3>${data.className}</h3>
            <p>ID:${data.id}</p>
            <a href="mailto: ${data.email}"
              >Email:${data.email}</a
            >
            <br>
            <a href="https://github.com/${data.github}" target="_blank">GitHub:${data.github}</a>
            </div>`;
}
//this will prompt the user if an engineer is added
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
//this will take the take for the intern and create an html section to be appended
function generateIntern(data) {
  return `<div class="bg-light text-center p-3 m-3 rounded">
  <h2>${data.name}</h2>
  <h3>${data.className}</h3>
  <p>ID:${data.id}</p>
  <a href="mailto: ${data.email}"
    >Email:${data.email}</a
  >
  <p>School:${data.school}</p>
  </div>`;
}
//this will prompt the user if an intern is added
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
//this will create and html file
function writeToFile(fileName, data) {
  fs.writeFile(`./dist/${fileName}`, data, (err) => {
    err ? console.error(err) : console.log("success!");
  });
}
//this will actually generate and and spit out the html so it can be appended.
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
  <body class="bg-secondary">
    <h1 class="text-center bg-primary p-3">My Team</h1>
    <div class= "d-flex justify-content-center">
    <div class = "row">
    <main id="main">
      
      <div class="bg-light text-center p-3 m-3 rounded">
            <h2>${data.name}</h2>
            <h3>${data.className}</h3>
            <p>ID:${data.id}</p>
            <a href="mailto: ${data.email}"
              >Email:${data.email}</a
            >
            <p>Office#:${data.officeNumber}</p>
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
//this will ask the user questoins about the manager and append data to an html file
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
//When index.js is run, this kickstart the program
init();
