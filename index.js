const inquirer = require("inquirer"); //require inquire for prompting user
const fs = require("fs"); //used to write file to doc
const { Circle, Triangle, Square } = require("./lib/shapes"); // used to set each class that user may pick

// questions that are being prompted to the user
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

// function to create SVG image  with user's input
generateSVG = (data) => {
  let character = data.character.slice(0, 3); // used to take the first 3 characters entered by the user
  let shape = data.shape; //assigning the shape  to pass through a check

  //switch case to decide which shape class to use based on the users choice of shape
  switch (shape) {
    case "Circle":
      shape = new Circle(); //sets class
      shape.setColor(data.shapeColor); //sets color
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

  //Template literal to put on the SVG file that we are creating using the user's input
  return `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<rect width="300px" height="200px" fill="white" />

${shape.render()} 

<text x="50%" y="60%" font-size="50" text-anchor="middle" cominant-baseline = "center" fill="${
    data.characterColor
  }">${character}</text>

</svg>`;
};

//write to file taking in the file name and user data
writeToFile = (fileName, data) => {
  fs.writeFile(fileName, generateSVG(data), (err) =>
    err ? console.log(err) : console.log(`Generated logo.svg`)
  );
};

//function that prompts using .then function to catch the promise from inquirer then writes to file using writeToFile()
function init() {
  inquirer
    .prompt(questions)
    .then((response) => writeToFile("logo.svg", response));
}

//initiates program
init();
