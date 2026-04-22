export class Shufflebag {
  constructor(data = []) {
    this.data = data;
    this.currentPosition = this.data.length - 1;
  }
  next() {
    const pos = Math.floor(Math.random() * this.currentPosition);
    const currentValue = this.data[pos];
    this.data[pos] = this.data[this.currentPosition];
    this.data[this.currentPosition] = currentValue;
    this.currentPosition--;
    if (this.currentPosition < 0) {
      this.currentPosition = this.data.length - 1;
    }
    return currentValue;
  }

  add(item, amount) {
    for (let i = 0; i < amount; i++) {
      this.data.push(item);
    }
    this.currentPosition = this.data.length - 1;
  }
}
