import { Block } from "./Block.mjs";

const EMPTY = ".";

class FallingShape {
  constructor(shape, row, col) {
    this.shape = shape;
    this.row = row;
    this.col = col;
  }

  moveDown() {
    return new FallingShape(this.shape, this.row + 1, this.col);
  }

  moveLeft() {
    return new FallingShape(this.shape, this.row, this.col - 1);
  }
  moveRight() {
    return new FallingShape(this.shape, this.row, this.col + 1);
  }

  rotateRight() {
    return new FallingShape(this.shape.rotateRight(), this.row, this.col);
  }

  rotateLeft() {
    return new FallingShape(this.shape.rotateLeft(), this.row, this.col);
  }

  blockAt(row, col) {
    if (
      row >= this.row &&
      row < this.row + this.shape.height() &&
      col >= this.col &&
      col < this.col + this.shape.width()
    ) {
      return this.shape.blockAt(row - this.row, col - this.col);
    } else {
      return EMPTY;
    }
  }

  nonEmptyBlocks() {
    const result = [];
    for (let row = this.row; row < this.row + this.shape.height(); row++) {
      for (let col = this.col; col < this.col + this.shape.width(); col++) {
        if (this.shape.blockAt(row - this.row, col - this.col) !== EMPTY) {
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
    this.falling = null;
    this.initializeBoard();
  }

  initializeBoard() {
    const result = [];
    for (let i = 0; i < this.height; i++) {
      result.push([]);
      for (let j = 0; j < this.width; j++) {
        result[i].push(EMPTY);
      }
    }
    this.state = result;
  }

  setState(newState) {
    this.state = newState;
  }

  toString() {
    let result = "";

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        const block = this.falling ? this.falling.blockAt(i, j) : EMPTY;
        if (block !== EMPTY) {
          result += this.falling.blockAt(i, j);
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
    if (this.falling) {
      throw "already falling";
    }
    this.falling = new FallingShape(shape, 0, Math.floor((this.width - shape.width()) / 2));
  }

  tick() {
    if (!this.hasFalling()) {
      return;
    }
    this.moveDown();
  }

  stopFalling() {
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        const block = this.falling.blockAt(row, col);
        if (block !== EMPTY) {
          this.state[row][col] = this.falling.blockAt(row, col);
        }
      }
    }
    this.falling = null;
  }

  hasFalling() {
    return this.falling !== null;
  }

  hitsSomething(attempt) {
    for (const block of attempt.nonEmptyBlocks()) {
      if (
        block.row >= this.height ||
        block.col < 0 ||
        block.col >= this.width ||
        this.state[block.row][block.col] !== EMPTY
      ) {
        return true;
      }
    }
    return false;
  }

  moveLeft() {
    if (this.hasFalling()) {
      const attempt = this.falling.moveLeft();
      if (this.hitsSomething(attempt)) {
        return;
      }
      this.falling = attempt;
    }
  }

  moveRight() {
    if (this.hasFalling()) {
      const attempt = this.falling.moveRight();
      if (this.hitsSomething(attempt)) {
        return;
      }
      this.falling = attempt;
    }
  }

  moveDown() {
    if (this.hasFalling()) {
      const attempt = this.falling.moveDown();
      if (this.hitsSomething(attempt)) {
        this.stopFalling();
        return;
      }
      this.falling = attempt;
    }
  }

  rotateRight() {
    if (this.hasFalling()) {
      const attempt = this.falling.rotateRight();
      if (this.hitsSomething(attempt)) {
        this.wallKick(attempt);
      } else {
        this.falling = attempt;
      }
    }
  }

  rotateLeft() {
    if (this.hasFalling()) {
      const attempt = this.falling.rotateLeft();
      if (this.hitsSomething(attempt)) {
        this.wallKick(attempt);
      } else {
        this.falling = attempt;
      }
    }
  }

  wallKick(attempt) {
    if (!this.hitsSomething(attempt.moveLeft())) {
      this.falling = attempt.moveLeft();
    }
    if (!this.hitsSomething(attempt.moveRight())) {
      this.falling = attempt.moveRight();
    }
    return;
  }
}
