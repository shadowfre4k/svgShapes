class Shape {
  constructor(character, characterColor, shape, shapeColor) {
    this.character = character;
    this.characterColor = characterColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape {
  constructor(character, characterColor, shape, shapeColor) {
    this.super(character, characterColor, shapeColor);
    this.shape = shape;
  }
}

class Triangle extends Shape {
  constructor(character, characterColor, shape, shapeColor) {
    this.super(character, characterColor, shapeColor);
    this.shape = shape;
  }
}

class Square extends Shape {
  constructor(character, characterColor, shape, shapeColor) {
    this.super(character, characterColor, shapeColor);
    this.shape = shape;
  }
}
/* <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */
