// Constructor class for all shapes
class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}
//Prototype method to make sure all classes can set color without rewriting in each
Shape.prototype.setColor = function (color) {
  this.shapeColor = color;
};
//Prototype method to make sure all classes can render without rewriting in each
Shape.prototype.render = function () {};

//all classes for each shape and polymorphed render function for each
class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
    this.render = () => {
      return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    };
  }
}

class Triangle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
    this.render = () => {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    };
  }
}

class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
    this.render = () => {
      return `<rect x="30" y="20" width="80%" height="80%" fill="${this.shapeColor}" />`;
    };
  }
}
//Exports so they can be imported to other files for use
module.exports = {
  Circle,
  Triangle,
  Square,
};
