import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  constructor(rotatingShape, orientations = [], currentOrientation = 0) {
    this.shape = rotatingShape;
    this.orientations = orientations;
    this.currentOrientation = currentOrientation;
  }

  static orientations(initialShape, orientationCount) {
    const shape = new RotatingShape(initialShape);
    const orientations = [shape, shape.rotateRight(), shape.rotateRight().rotateRight(), shape.rotateLeft()].slice(
      0,
      orientationCount
    );
    return orientations;
  }
  static get T_SHAPE() {
    const t_shape = [
      [".", "T", "."],
      ["T", "T", "T"],
      [".", ".", "."],
    ];
    const orientations = Tetromino.orientations(t_shape, 4);
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
    const orientations = [new RotatingShape(i_shape), new RotatingShape(i_shape).rotateRight()];
    const orientations2 = Tetromino.orientations(i_shape, 2);
    return new Tetromino(orientations[0], orientations2, 0);
  }

  static get O_SHAPE() {
    const o_shape = [
      [".", "O", "O"],
      [".", "O", "O"],
      [".", ".", "."],
    ];
    const orientations = [new RotatingShape(o_shape)];
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
