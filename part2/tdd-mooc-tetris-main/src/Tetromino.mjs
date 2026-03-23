import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  constructor(rotatingShape, orientations = [], currentOrientation = 0) {
    this.shape = rotatingShape;
    this.orientations = orientations;
    this.currentOrientation = currentOrientation;
  }

  static fromArray(initialShape, orientationCount, currentOrientation = 0) {
    const shape = new RotatingShape(initialShape);
    const orientations = [shape, shape.rotateRight(), shape.rotateRight().rotateRight(), shape.rotateLeft()].slice(
      0,
      orientationCount
    );
    const result = new Tetromino(orientations, currentOrientation);
    return orientations;
  }
  static get T_SHAPE() {
    const t_shape = [
      [".", "T", "."],
      ["T", "T", "T"],
      [".", ".", "."],
    ];
    const orientations = Tetromino.fromArray(t_shape, 4, 0);
    return new Tetromino(new RotatingShape(t_shape), orientations, 0);
  }

  static get I_SHAPE() {
    const i_shape = [
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
      ["I", "I", "I", "I", "."],
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
    ];
    const orientations = Tetromino.fromArray(i_shape, 2);
    return new Tetromino(orientations[0], orientations, 0);
  }

  static get O_SHAPE() {
    const o_shape = [
      [".", "O", "O"],
      [".", "O", "O"],
      [".", ".", "."],
    ];
    const orientations = Tetromino.fromArray(o_shape, 1);
    return new Tetromino(new RotatingShape(o_shape), orientations, 0);
  }

  toString() {
    return this.shape.toString();
  }

  rotateRight() {
    const next = (this.currentOrientation + 1) % this.orientations.length;
    return new Tetromino(this.orientations[next], this.orientations, next);
  }

  rotateLeft() {
    const next = (this.currentOrientation + this.orientations.length - 1) % this.orientations.length;
    return new Tetromino(this.orientations[next], this.orientations, next);
  }
}
