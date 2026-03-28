export class Block {
  constructor(letter) {
    this.letter = letter;
  }
  toString() {
    let result = "";
    result += this.letter;
    return result;
  }

  rotateRight() {
    return new Block();
  }
  rotateLeft() {
    return new Block();
  }

  blockAt(row, col) {
    return this.letter;
  }

  height() {
    return 1;
  }
  width() {
    return 1;
  }
}
