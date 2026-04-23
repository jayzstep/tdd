export class Tetromino {
  constructor(orientations, currentOrientation, wallkicks = true) {
    this.orientations = orientations;
    this.currentOrientation = (currentOrientation + orientations.length) % orientations.length;
    this.wallkicks = wallkicks;
  }

  static get T_SHAPE() {
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
    const t_shape3 = `....
                      .T..
                      TTT.
                      ....
`;
    const t_shape4 = `.T..
                      .TT.
                      .T..
                      ....
`;
    return new Tetromino([t_shape1, t_shape2, t_shape3, t_shape4], 0);
  }

  static get I_SHAPE() {
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
    return new Tetromino([i_shape1, i_shape2], 0, false);
  }

  static get O_SHAPE() {
    const o_shape = `....
                     .OO.
                     .OO.
                     ....
`;
    return new Tetromino([o_shape], 0);
  }

  static get S_SHAPE() {
    const s_shape1 = `....
                      .SS.
                      SS..
                      ....
`;
    const s_shape2 = `.S..
                      .SS.
                      ..S.
                      ....
`;
    return new Tetromino([s_shape1, s_shape2], 0);
  }

  static get Z_SHAPE() {
    const z_shape1 = `....
                      ZZ..
                      .ZZ.
                      ....
`;
    const z_shape2 = `..Z.
                      .ZZ.
                      .Z..
                      ....
`;
    return new Tetromino([z_shape1, z_shape2], 0);
  }

  static get J_SHAPE() {
    const j_shape1 = `....
                      JJJ.
                      ..J.
                      ....
`;
    const j_shape2 = `..J.
                      ..J.
                      .JJ.
                      ....
`;
    const j_shape3 = `....
                      J...
                      JJJ.
                      ....
`;
    const j_shape4 = `.JJ.
                      .J..
                      .J..
                      ....
`;
    return new Tetromino([j_shape1, j_shape2, j_shape3, j_shape4], 0);
  }

  static get L_SHAPE() {
    const l_shape1 = `....
                      LLL.
                      L...
                      ....
`;
    const l_shape2 = `.LL.
                      ..L.
                      ..L.
                      ....
`;
    const l_shape3 = `....
                      ..L.
                      LLL.
                      ....
`;
    const l_shape4 = `.L..
                      .L..
                      .LL.
                      ....
`;
    return new Tetromino([l_shape1, l_shape2, l_shape3, l_shape4], 0);
  }

  toString() {
    return this.orientations[this.currentOrientation].replace(/[ \t]/g, "");
  }

  rotateRight() {
    return new Tetromino(this.orientations, this.currentOrientation + 1, this.wallkicks);
  }

  rotateLeft() {
    return new Tetromino(this.orientations, this.currentOrientation - 1, this.wallkicks);
  }

  height() {
    return 4;
  }
  width() {
    return 4;
  }

  rowOffset() {
    return -1;
  }

  blockAt(row, col) {
    return this.toString()[row * 5 + col];
  }
}
