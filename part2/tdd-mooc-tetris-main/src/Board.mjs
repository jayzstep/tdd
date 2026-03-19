export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.initializeBoard();
  }

  initializeBoard() {
    const result = [];
    for (let i = 0; i < this.height; i++) {
      result.push([]);
      for (let j = 0; j < this.width; j++) {
        result[i].push(".");
      }
    }
    this.state = result;
  }

  toString() {
    let result = "";
    this.state.forEach((row) => (result += row.join("") + "\n"));
    return result;
  }

  drop(shape) {
    this.state[0][1] = shape;
  }

  tick() {
    const newState = Array(this.width).fill(".");
    this.state.forEach((row) => newState.push(row));
    this.state2 = newState.slice(this.height);
    const temp = this.state[0];
    this.state[0] = this.state[1];
    this.state[1] = temp;
  }
}
