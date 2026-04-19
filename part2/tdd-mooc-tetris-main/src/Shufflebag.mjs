export class Shufflebag {
  constructor() {
    this.data = [0, 1, 2, 3, 4, 5, 6];
  }
  next() {
    return this.data[0];
  }
}
