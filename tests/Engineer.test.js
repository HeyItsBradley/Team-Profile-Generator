const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("hasName", () => {
    it("should return the given name", () => {
      const engineerObj = new Engineer("tom", 342, "tom@gmail.com", "Engineer");
      expect(engineerObj.getName()).toEqual("tom");
      expect(engineerObj.getId()).toEqual(342);
      expect(engineerObj.getEmail()).toEqual("tom@gmail.com");
      expect(engineerObj.getRole()).toEqual("Engineer");
    });
  });
});
