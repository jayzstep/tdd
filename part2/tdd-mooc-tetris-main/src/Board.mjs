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
    this.state2 = result;
  }

  toString() {
    let result = "";
    this.state2.forEach((row) => (result += row.join("") + "\n"));
    return result;
  }

  drop(shape) {
    if (this.shapeFalling) {
      throw "already falling";
    }
    this.shape = shape;
    this.shapeFalling = true;
    this.shapeLocation = [0, Math.floor(this.width / 2)];
    this.shapeLocation2 = { row: 0, col: Math.floor(this.width / 2) };
    this.state[0][this.shapeLocation[1]] = this.shape;

    const { row, col } = this.shapeLocation2;
    this.state2[row][col] = this.shape;
  }

  tick() {
    const { row, col } = this.shapeLocation2;
    if (this.shapeLocation[0] == this.height - 1) {
      this.shapeFalling = false;
      return;
    }
    if (row == this.height - 1) {
      this.shapeFalling = false;
      return;
    }
    this.state[this.shapeLocation[0]][this.shapeLocation[1]] = ".";
    this.state2[row][col] = ".";
    this.shapeLocation[0]++;
    this.shapeLocation2.row++;
    this.state[this.shapeLocation[0]][this.shapeLocation[1]] = this.shape;
    this.state2[row + 1][col] = this.shape;
  }

  hasFalling() {
    return this.shapeFalling;
  }
}
