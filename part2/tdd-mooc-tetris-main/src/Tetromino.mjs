import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
  constructor(orientations, currentOrientation) {
    this.orientations = orientations;
    this.currentOrientation = (currentOrientation + orientations.length) % orientations.length;
  }

  static fromArray(initialShape, orientationCount, currentOrientation = 0) {
    const shape = new RotatingShape(initialShape);
    const orientations = [
      shape,
      shape.rotateRight(),
      shape.rotateRight().rotateRight(),
      shape.rotateRight().rotateRight().rotateRight(),
    ].slice(0, orientationCount);
    return new Tetromino(orientations, currentOrientation);
  }
  static get T_SHAPE() {
    const t_shape = [
      [".", "T", "."],
      ["T", "T", "T"],
      [".", ".", "."],
    ];
    return Tetromino.fromArray(t_shape, 4, 0);
  }
  static get T_SHAPE2() {
    const t_shape1 = `....
                      TTT.
                      .T..
                      ....
`;
    const t_shape2 = `.T..
                      TT..
                      .T..
                      ....
`;
    const t_shape3 = `.T..
                      .TT.
                      .T..
                      ....
`;
    const t_shape4 = `....
                      .T..
                      TTT.
                      ....
`;
    return new Tetromino([t_shape1, t_shape2, t_shape3, t_shape4, t_shape3], 0);
  }

  static get I_SHAPE() {
    const i_shape = [
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
      ["I", "I", "I", "I", "."],
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
    ];
    return Tetromino.fromArray(i_shape, 2);
  }

  static get I_SHAPE2() {
    const i_shape1 = `....
                      IIII
                      ....
                      ....
`;
    const i_shape2 = `..I.
                      ..I.
                      ..I.
                      ..I.
`;
    return new Tetromino([i_shape1, i_shape2], 0);
  }

  static get O_SHAPE() {
    const o_shape = `....
                     .OO.
                     .OO.
                     ....
`;
    return new Tetromino([o_shape], 0);
  }

  toString() {
    return this.orientations[this.currentOrientation].toString();
  }

  toString2() {
    return this.orientations[this.currentOrientation].replace(/[ \t]/g, "");
  }

  rotateRight() {
    return new Tetromino(this.orientations, this.currentOrientation + 1);
  }

  rotateLeft() {
    return new Tetromino(this.orientations, this.currentOrientation - 1);
  }

  height() {
    if (this.orientations[this.currentOrientation] instanceof RotatingShape) {
      return this.orientations[this.currentOrientation].height();
    } else {
      return 4;
    }
  }
  width() {
    if (this.orientations[this.currentOrientation] instanceof RotatingShape) {
      return this.orientations[this.currentOrientation].width();
    } else {
      return 4;
    }
  }

  blockAt(row, col) {
    if (this.orientations[this.currentOrientation] instanceof RotatingShape) {
      return this.orientations[this.currentOrientation].blockAt(row, col);
    } else {
      return this.toString2()[row * 5 + col];
    }
  }
}
