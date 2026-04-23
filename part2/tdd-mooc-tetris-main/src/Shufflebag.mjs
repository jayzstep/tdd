export class ShuffleBag {
  constructor(data = []) {
    this.data = data;
    this.size = this.data.length;
    this.currentPosition = this.size - 1;
  }
  next() {
    const pos = Math.floor(Math.random() * this.currentPosition);
    const currentValue = this.data[pos];
    this.data[pos] = this.data[this.currentPosition];
    this.data[this.currentPosition] = currentValue;
    this.currentPosition--;
    if (this.currentPosition < 0) {
      this.currentPosition = this.size - 1;
    }
    return currentValue;
  }

  add(item, amount) {
    for (let i = 0; i < amount; i++) {
      this.data.push(item);
    }
    this.size = this.data.length;
    this.currentPosition = this.size - 1;
  }
}
