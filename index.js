const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "character",
    message: "What text would you like on your SVG? (Max: 3 characters)",
  },

  {
    type: "input",
    name: "characterColor",
    message:
      "Please enter a color keyword for your text color!(OR a hexadecimal number) ",
  },
  {
    type: "list",
    name: "shape",
    message: "What Shape would you like?",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "Please enter a color keyword for your shape color!(OR a hexadecimal number) ",
  },
];

function generateSVG(data) {
  let shape = data.shape;
  console.log(shape);
  switch (shape) {
    case "Circle":
      shape = new Circle();
      shape.setColor(data.shapeColor);
      break;
    case "Triangle":
      shape = new Triangle();
      shape.setColor(data.shapeColor);
      break;
    case "Square":
      shape = new Square();
      shape.setColor(data.shapeColor);
      break;
  }

  return `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<rect width="300px" height="200px" fill="white" />

${shape.render()}

<text x="50%" y="60%" font-size="50" text-anchor="middle" cominant-baseline = "center" fill="${
    data.characterColor
  }">${data.character}</text>

</svg>`;
}

writeToFile = (fileName, data) => {
  fs.writeFile(fileName, generateSVG(data), (err) =>
    err ? console.log(err) : console.log(`Generated logo.svg`)
  );
};

function init() {
  inquirer
    .prompt(questions)
    .then((response) => writeToFile("logo.svg", response));
}

init();
