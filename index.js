const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "characters",
    message: "What text would you like on your SVG? (Max: 3 characters)",
  },

  {
    type: "list",
    name: "colors",
    message: "What color would you like to would you like the characters",
    choices: [
      "Red",
      "Blue",
      "Green",
      "Purple",
      "orange",
      "Pink",
      "Yellow",
      "Brown",
      "Black",
    ],
  },
  {
    type: "list",
    name: "shapes",
    message: "What Shape would you like?",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "list",
    name: "shapeColors",
    message: "What color would you like to would your shape?",
    choices: [
      "Red",
      "Blue",
      "Green",
      "Purple",
      "orange",
      "Pink",
      "Yellow",
      "Brown",
      "Black",
    ],
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, fucntion(data), (err) =>
    err ? console.log(err) : console.log(`Success`)
  );
}

function init() {
  inquirer
    .prompt(questions)
    .then((response) => writeToFile("logo.svg", response));
}

init();
