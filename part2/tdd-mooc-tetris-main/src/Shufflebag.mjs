export class Shufflebag {
  constructor() {
    this.data = [0, 1, 2, 3, 4, 5, 6];
  }
  next() {
    const randomIndex = Math.floor(Math.random() * 7);
    return this.data[randomIndex];
  }
}
