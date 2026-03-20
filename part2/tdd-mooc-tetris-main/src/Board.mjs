export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.initializeBoard();
  }

  initializeBoard() {
    const result = [];
    for (let i = 0; i < this.height; i++) {
      result.push([]);
      for (let j = 0; j < this.width; j++) {
        result[i].push(".");
      }
    }
    this.state = result;
  }

  toString() {
    let result = "";
    this.state.forEach((row) => (result += row.join("") + "\n"));
    return result;
  }

  drop(shape) {
    if (this.shapeFalling) {
      throw "already falling";
    }
    this.shape = shape;
    this.shapeFalling = true;
    const { row, col } = (this.shapeLocation = { row: 0, col: Math.floor(this.width / 2) });

    // const { row, col } = this.shapeLocation;
    this.state[row][col] = this.shape;
  }

  tick() {
    const { row, col } = this.shapeLocation;
    if (row == this.height - 1) {
      this.shapeFalling = false;
      return;
    }
    this.state[row][col] = ".";
    this.shapeLocation.row++;
    this.state[row + 1][col] = this.shape;
  }

  hasFalling() {
    return this.shapeFalling;
  }
}
