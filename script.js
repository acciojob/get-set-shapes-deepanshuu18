// Define the Rectangle class
class Rectangle {
  // Constructor accepts width and height as arguments
  constructor(width, height) {
    this._width = width;  // Private property for width
    this._height = height; // Private property for height
  }

  // Getter method for width
  get width() {
    return this._width;
  }

  // Getter method for height
  get height() {
    return this._height;
  }

  // Method to calculate the area of the rectangle
  getArea() {
    return this._width * this._height;
  }
}

// Define the Square class that extends Rectangle
class Square extends Rectangle {
  // Constructor accepts side as the argument
  constructor(side) {
    // Call the parent class constructor with side for both width and height
    super(side, side);
  }

  // Method to calculate the perimeter of the square
  getPerimeter() {
    return 4 * this.width; // Since width = height for square, we can use width
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
