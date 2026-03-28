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

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (this.shapeFalling && i == this.shapeFalling.row && j == this.shapeFalling.col) {
          result += this.shapeFalling.piece;
          continue;
        }
        result += this.state[i][j];
      }
      result += "\n";
    }
    return result;
  }

  drop(shape) {
    if (typeof shape === "string") {
      shape = new Block(shape).toString();
    }
    if (this.shapeFalling) {
      throw "already falling";
    }
    this.shapeFalling = new FallingShape(shape, 0, Math.floor(this.width / 2));
  }

  tick() {
    if (this.hasHitSomething()) {
      this.state[this.shapeFalling.row][this.shapeFalling.col] = this.shapeFalling.piece;
      this.shapeFalling = null;
      return;
    }
    this.shapeFalling = this.shapeFalling.moveDown();
  }

  hasFalling() {
    return this.shapeFalling !== null;
  }

  hasHitSomething() {
    const row = this.shapeFalling.row;
    const col = this.shapeFalling.col;
    return row == this.height - 1 || this.state[row + 1][col] != ".";
  }
}
