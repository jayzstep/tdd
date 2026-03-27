import { Block } from "./Block.mjs";
class FallingShape {
  constructor(piece, row, col) {
    this.piece = piece;
    this.row = row;
    this.col = col;
  }

  moveDown() {
    return new FallingShape(this.piece, this.row + 1, this.col);
  }
}

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
    if (typeof shape === "string") {
      shape = new Block(shape).toString();
    }
    if (this.shapeFalling) {
      throw "already falling";
    }
    this.shapeFalling = shape;
    this.shapeFalling2 = new FallingShape(shape, 0, Math.floor(this.width / 2));

    this.shapeLocation = { row: 0, col: Math.floor(this.width / 2) };
    const row = this.shapeFalling2.row;
    const col = this.shapeFalling2.col;
    this.state[row][col] = this.shapeFalling;
  }

  tick() {
    if (this.hasHitSomething()) {
      this.shapeFalling = null;
      this.shapeFalling2 = null;
      return;
    }
    this.shapeFalling2 = this.shapeFalling2.moveDown();

    const row2 = this.shapeFalling2.row;
    const col2 = this.shapeFalling2.col;

    this.state[row2 - 1][col2] = ".";
    this.state[row2][col2] = this.shapeFalling;
  }

  hasFalling() {
    return this.shapeFalling2 !== null;
  }

  hasHitSomething() {
    const row2 = this.shapeFalling2.row;
    const col2 = this.shapeFalling2.col;
    return row2 == this.height - 1 || this.state[row2 + 1][col2] != ".";
  }
}
