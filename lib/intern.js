const employee = require("./employee");

class Intern extends employee {
  constructor(name, id, email, className, school) {
    super(name, id, email, className);
    this.school = school;
  }
}

module.exports = Intern;
