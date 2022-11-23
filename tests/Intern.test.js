const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("getProperties", () => {
    it("should return the given properties", () => {
      const internObj = new Intern("sarah", 342, "sarah@gmail.com", "Intern");
      expect(internObj.getName()).toEqual("sarah");
      expect(internObj.getId()).toEqual(342);
      expect(internObj.getEmail()).toEqual("sarah@gmail.com");
      expect(internObj.getRole()).toEqual("Intern");
    });
  });
});
