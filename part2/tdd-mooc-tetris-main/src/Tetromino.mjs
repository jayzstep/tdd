import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  constructor(rotatingShape, orientations = [], currentOrientation = 0) {
    this.shape = rotatingShape;
    this.orientations = orientations;
    this.currentOrientation = currentOrientation;
  }

  static orientations(initialShape) {
    const shape = new RotatingShape(initialShape);
  }
  static get T_SHAPE() {
    const t_shape = [
      [".", "T", "."],
      ["T", "T", "T"],
      [".", ".", "."],
    ];
    const orientations = [
      new RotatingShape(t_shape),
      new RotatingShape(t_shape).rotateRight(),
      new RotatingShape(t_shape).rotateRight().rotateRight(),
      new RotatingShape(t_shape).rotateLeft(),
    ];
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
    return new Tetromino(orientations[0], orientations, 0);
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
