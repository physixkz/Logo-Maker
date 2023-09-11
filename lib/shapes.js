// Define a base class "Shape"
class Shape {
    constructor() {
      // Initialize a property to store the color of the shape
      this.color = "";
    }
  
    // Method to set the color of the shape
    setColor(colorVar) {
      this.color = colorVar;
    }
  }
  
  // Define a class Triangle
  class Triangle extends Shape {
    render() {
      // Return an SVG polygon element with the specified color
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // Define a class Square
  class Square extends Shape {
    render() {
      // Return an SVG rectangle element with the specified color
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  // Define a class Circle
  class Circle extends Shape {
    render() {
      // Return an SVG circle element with the specified color
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  
  // Export the "Triangle," "Square," and "Circle" classes for use in other modules
  module.exports = { Triangle, Square, Circle };