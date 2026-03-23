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
    return new Tetromino(new RotatingShape(t_shape), "T");
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
    return new Tetromino(this.shape.rotateRight(), this.shapeLetter);
  }

  rotateLeft() {
    if (this.shapeLetter == "I") {
      return new Tetromino(this.shape.rotateRight(), this.shapeLetter);
    }
    return new Tetromino(this.shape.rotateLeft(), this.shapeLetter);
  }
}
