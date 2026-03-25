export class Block {
  static get BLOCK_SHAPE() {
    return new Block();
  }

  toString() {
    return ".b.\n...\n...";
  }

  rotateRight() {
    return new Block();
  }
  rotateLeft() {
    return new Block();
  }
}
