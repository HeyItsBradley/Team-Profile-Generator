const employee = require("./employee");

class Engineer extends employee {
  constructor(name, id, email, className, github) {
    super(name, id, email, className);
    this.github = github;
  }
}

module.exports = Engineer;
