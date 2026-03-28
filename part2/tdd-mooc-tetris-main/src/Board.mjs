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

  blockAt(row, col) {
    if (
      row >= this.row &&
      row < this.row + this.piece.height() &&
      col >= this.col &&
      col < this.col + this.piece.width()
    ) {
      return this.piece.blockAt(row - this.row, col - this.col);
    } else {
      return ".";
    }
  }

  nonEmptyBlocks() {
    const result = [];
    for (let row = this.row; row < this.row + this.piece.height(); row++) {
      for (let col = this.col; col < this.col + this.piece.width(); col++) {
        if (this.piece.blockAt(row - this.row, col - this.col) !== ".") {
          result.push({ row, col });
        }
      }
    }
    return result;
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
        const block = this.shapeFalling ? this.shapeFalling.blockAt(i, j) : ".";
        if (block !== ".") {
          result += this.shapeFalling.blockAt(i, j);
        } else {
          result += this.state[i][j];
        }
      }
      result += "\n";
    }
    return result;
  }

  drop(shape) {
    if (typeof shape === "string") {
      shape = new Block(shape);
    }
    if (this.shapeFalling) {
      throw "already falling";
    }
    this.shapeFalling = new FallingShape(shape, 0, Math.floor((this.width - shape.width()) / 2));
  }

  tick() {
    if (!this.hasFalling()) {
      return;
    }
    if (this.hasHitSomething()) {
      for (let row = 0; row < this.height; row++) {
        for (let col = 0; col < this.width; col++) {
          this.state[row][col] = this.shapeFalling.blockAt(row, col);
        }
      }
      this.shapeFalling = null;
      return;
    }
    this.shapeFalling = this.shapeFalling.moveDown();
  }

  hasFalling() {
    return this.shapeFalling !== null;
  }

  hasHitSomething() {
    for (const block of this.shapeFalling.nonEmptyBlocks()) {
      if (block.row == this.height - 1) {
        return true;
      }
    }
    return false;
  }
}
