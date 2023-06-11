class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

Shape.prototype.setColor = function (color) {
  this.shapeColor = color;
};

Shape.prototype.render = function () {};

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

module.exports = {
  Circle,
  Triangle,
  Square,
};
