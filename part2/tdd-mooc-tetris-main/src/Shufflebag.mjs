export class Shufflebag {
  constructor() {
    this.data = [0, 1, 2, 3, 4, 5, 6];
    this.data2 = [0, 1, 2, 3, 4, 5, 6];
    this.index = this.data.length - 1;
  }
  next() {
    const result = this.data[this.index % 7];
    const randomIndex = Math.floor(Math.random() * this.index);
    const result2 = this.data2[randomIndex];
    this.index--;
    if (this.index < 0) {
      this.index = this.data.length - 1;
    }
    return result;
  }
}
