import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  constructor(rotatingShape) {
    this.shape = rotatingShape;
  }
  static get T_SHAPE() {
    const t_shape = ".T.\nTTT\n...\n";
    return new Tetromino(RotatingShape.fromString(t_shape));
  }

  toString() {
    return this.shape.toString();
  }
}
