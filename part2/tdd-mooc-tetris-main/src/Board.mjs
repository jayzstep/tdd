export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.initializeBoard();
  }

  initializeBoard() {
    let result = "";
    const result2 = [];
    for (let i = 0; i < this.height; i++) {
      result2.push([]);
      for (let j = 0; j < this.width; j++) {
        result += ".";
        result2[i].push(".");
      }
      result += "\n";
    }
    this.state = result;
    this.state2 = result2;
  }

  toString() {
    let result = "";
    return this.state;
  }

  drop() {
    this.state = ".X.\n...\n...\n";
  }
}
