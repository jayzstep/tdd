import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  constructor(rotatingShape) {
    this.shape = rotatingShape;
  }
  static get T_SHAPE() {
    const t_shape = [
      [".", "T", "."],
      ["T", "T", "T"],
      [".", ".", "."],
    ];
    return new Tetromino(new RotatingShape(t_shape));
  }

  static get I_SHAPE() {
    const t_shape = [
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
      ["I", "I", "I", "I", "."],
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
    ];
    return new Tetromino(new RotatingShape(t_shape));
  }

  toString() {
    return this.shape.toString();
  }

  rotateRight() {
    return this.shape.rotateRight();
  }

  rotateLeft() {
    return this.shape.rotateLeft();
  }
}
