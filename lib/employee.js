class Employee {
  constructor(name, id, email, className) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.className = className;
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

module.exports = Employee;
