export class Shufflebag {
  constructor() {
    this.data2 = [0, 1, 2, 3, 4, 5, 6];
    this.index = this.data2.length - 1;
  }
  next() {
    const randomIndex = Math.floor(Math.random() * this.index);
    const result2 = this.data2[randomIndex];
    this.data2[randomIndex] = this.data2[this.index];
    this.data2[this.index] = result2;
    this.index--;
    if (this.index < 0) {
      this.index = this.data2.length - 1;
    }
    return result2;
  }
}
