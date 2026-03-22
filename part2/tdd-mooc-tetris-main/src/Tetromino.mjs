export class Tetromino {
  static get T_SHAPE() {
    return new Tetromino();
  }

  toString() {
    const shape = `.T.
          TTT
          ...`;
    return shape.replaceAll(" ", "").trim() + "\n";
  }
}
