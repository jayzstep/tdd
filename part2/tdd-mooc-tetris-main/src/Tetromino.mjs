import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  constructor(rotatingShape, validStates = [], shapeLetter, currentOrientation = 0) {
    this.shape = rotatingShape;
    this.validStates = validStates;
    this.shapeLetter = shapeLetter;
    this.currentOrientation = currentOrientation;
  }
  static get T_SHAPE() {
    const t_shape = [
      [".", "T", "."],
      ["T", "T", "T"],
      [".", ".", "."],
    ];
    const validStates = [
      new RotatingShape(t_shape),
      new RotatingShape(t_shape).rotateRight(),
      new RotatingShape(t_shape).rotateRight().rotateRight(),
      new RotatingShape(t_shape).rotateLeft(),
    ];
    return new Tetromino(new RotatingShape(t_shape), validStates, "T", 0);
  }

  static get I_SHAPE() {
    const t_shape = [
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
      ["I", "I", "I", "I", "."],
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
    ];
    const validStates = [new RotatingShape(t_shape), new RotatingShape(t_shape).rotateRight()];
    return new Tetromino(validStates[0], validStates, "I", 0);
  }

  toString() {
    return this.shape.toString();
  }

  rotateRight() {
    return new Tetromino(
      this.validStates[(this.currentOrientation + 1) % this.validStates.length],
      this.validStates,
      this.shapeLetter,
      (this.currentOrientation + 1) % this.validStates.length
    );
  }

  rotateLeft() {
    const validStateIndex =
      this.currentOrientation == 0 ? (this.currentOrientation += this.validStates.length) : this.currentOrientation;
    return new Tetromino(
      this.validStates[this.currentOrientation - (1 % this.validStates.length)],
      this.validStates,
      this.shapeLetter,
      (this.currentOrientation - 1) % this.validStates.length
    );
  }
}
