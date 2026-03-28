export class RotatingShape {
  constructor(shape) {
    this.shape = shape;
    this.size = shape.length;
  }
  static fromString(shape) {
    const trimmed = shape.replace(/\s/g, "").split("");
    const result = [];
    const size = Math.sqrt(trimmed.length);

    for (let i = 0; i < size; i++) {
      result[i] = [];
      for (let j = 0; j < size; j++) {
        result[i].push(trimmed[i * size + j]);
      }
    }
    return new RotatingShape(result);
  }

  toString() {
    let result = "";
    this.shape.forEach((row) => {
      row.forEach((part) => (result += part));
      result += "\n";
    });
    return result;
  }

  rotateRight() {
    const result = Array.from({ length: this.size }, () => Array(this.size));
    this.shape.forEach((row, i) => {
      row.forEach((part, j) => {
        result[j][this.size - i - 1] = part;
      });
    });

    return new RotatingShape(result);
  }

  rotateLeft() {
    const result = Array.from({ length: this.size }, () => Array(this.size));
    this.shape.forEach((row, i) => {
      row.forEach((part, j) => {
        result[this.size - j - 1][i] = part;
      });
    });
    return new RotatingShape(result);
  }

  height() {
    return this.shape.length;
  }
  width() {
    return this.shape[0].length;
  }

  blockAt(row, col) {
    return this.shape[row][col];
  }
}
