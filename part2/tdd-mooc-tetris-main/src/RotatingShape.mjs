export class RotatingShape {
  constructor(shape) {
    this.shape = shape;
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
    const result = [[], [], []];
    this.shape.forEach((row, i) => {
      row.forEach((part, j) => {
        result[j][2 - i] = part;
      });
    });

    return new RotatingShape(result);
  }

  rotateLeft() {
    const result = [[], [], []];
    this.shape.forEach((row, i) => {
      row.forEach((part, j) => {
        result[2 - j][i] = part;
      });
    });
    return new RotatingShape(result);
  }
}
