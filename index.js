const fs = require("fs");
const inquirer = require("inquirer");

class Employee {
  constructor(name, id, email, className) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.className;
  }
}

class Manager {
  constructor(name, id, email, className, officeNumber) {
    this.name = name;
    this.id = id;
    this.className = className;
    this.email = email;
    this.officeNumber = officeNumber;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.className;
  }
}

class Engineer {
  constructor(name, id, email, className, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.className;
  }

  getGithub() {
    return this.github;
  }
}

class Intern {
  constructor(name, id, email, className, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.className;
  }

  getSchool() {
    return this.school;
  }
}

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
    name: "Name",
  },
  {
    type: "input",
    message: "What is your engineers ID?",
    name: "Id",
  },
  {
    type: "input",
    message: "What is your engineers Email?",
    name: "Email",
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
    name: "Name",
  },
  {
    type: "input",
    message: "What is your interns ID?",
    name: "Id",
  },
  {
    type: "input",
    message: "What is your interns Email?",
    name: "Email",
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
