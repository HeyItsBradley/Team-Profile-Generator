const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("hasName", () => {
    it("should return the given name", () => {
      const employeeObj = new Employee(
        "mary",
        342,
        "mary@gmail.com",
        "Employee"
      );
      expect(employeeObj.getName()).toEqual("mary");
      expect(employeeObj.getId()).toEqual(342);
      expect(employeeObj.getEmail()).toEqual("mary@gmail.com");
      expect(employeeObj.getRole()).toEqual("Employee");
    });
  });
});
