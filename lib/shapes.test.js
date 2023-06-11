//require class triange to run test

const { Triangle } = require("./shapes");

//creating test suite for triangle class
describe("Triangle", () => {
  //A test is created to check that the class does in fact return the class
  describe("Triangle class and render", () => {
    //executing instance of the class
    it("It should successfully create an instance of using the triangle class", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
});
