export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.state = "";
  }

  initializeBoard() {
    let result = "";
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        result += ".";
      }
      result += "\n";
    }
    this.state = result;
  }

  toString() {
    this.initializeBoard();
    return this.state;
  }
}
