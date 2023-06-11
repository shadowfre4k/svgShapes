const { Triangle } = require("./shapes");

describe("Triangle", () => {
  describe("Triangle class and render", () => {
    it("It should successfully create an instance of using the triangle class", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
});
