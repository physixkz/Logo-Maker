// Import required modules
const { writeFile } = require("fs");
const { prompt } = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shapes");

// Function to generate SVG and write it to a file
const writeToFile = (fileName, answers) => {
  let svgString = "";

  
  svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  svgString += "<g>";
  svgString += `${answers.shape}`;

  let shapeChoice;
  // Check the chosen shape and create the corresponding object and SVG element
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  // Add text to the SVG
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  svgString += "</g>";
  svgString += "</svg>";

  // Write the SVG string to a file
  writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
};

// Function to prompt the user for input
const promptUser = async () => {
  const answers = await prompt([
    {
      type: "input",
      message:
        "What text would you like your logo to display? (Enter up to three characters)",
      name: "text",
    },
    {
      type: "input",
      message:
        "Choose text color (Enter color keyword OR a hexadecimal number)",
      name: "textColor",
    },
    {
      type: "list",
      message: "What shape would you like the logo to render?",
      choices: ["Triangle", "Square", "Circle"],
      name: "shape",
    },
    {
      type: "input",
      message:
        "Choose shape's background color (Enter color keyword OR a hexadecimal number)",
      name: "shapeBackgroundColor",
    },
  ]);

  // Check the length of the entered text
  if (answers.text.length > 3) {
    console.log("Must enter a value of no more than 3 characters");
    // If the text is too long, prompt the user again
    promptUser();
  } else {
    // Generate and write the SVG file
    writeToFile("logo.svg", answers);
  }
};

// Start the user prompt
promptUser();