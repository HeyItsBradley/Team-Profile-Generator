const employee = require("./employee");

class Manager extends employee {
  constructor(name, id, email, className, officeNumber) {
    super(name, id, email, className);
    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;
