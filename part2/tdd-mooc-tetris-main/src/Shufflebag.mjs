export class Shufflebag {
  constructor() {
    this.data = [0, 1, 2, 3, 4, 5, 6];
    this.index = this.data.length - 1;
  }
  next() {
    const result = this.data[this.index % 7];
    this.index--;
    return result;
  }
}
