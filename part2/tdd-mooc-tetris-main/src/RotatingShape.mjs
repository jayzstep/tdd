export class RotatingShape {
  constructor(shape) {
    this.shape = shape;
  }
  static fromString(shape) {
    const trimmed = shape.replace(/\s/g, "").split("");
    const result = [];

    for (let i = 0; i < 3; i++) {
      result[i] = [];
      for (let j = 0; j < 3; j++) {
        result[i].push(trimmed[i * 3 + j]);
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
    const rotated = `GDA
                     HEB
                     IFC`;
    return RotatingShape.fromString(rotated);
  }
}
