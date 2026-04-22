export class Shufflebag {
  constructor() {
    this.data = [0, 1, 2, 3, 4, 5, 6];
    this.index = this.data.length - 1;
  }
  next() {
    const randomIndex = Math.floor(Math.random() * this.index);
    const result = this.data[randomIndex];
    this.data[randomIndex] = this.data[this.index];
    this.data[this.index] = result;
    this.index--;
    if (this.index < 0) {
      this.index = this.data.length - 1;
    }
    return result;
  }
}
