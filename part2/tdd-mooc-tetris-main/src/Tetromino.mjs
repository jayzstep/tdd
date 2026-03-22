import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  constructor(rotatingShape, shapeLetter) {
    this.shape = rotatingShape;
    this.shapeLetter = shapeLetter;
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
    return new Tetromino(new RotatingShape(t_shape), "I");
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
