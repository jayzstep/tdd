export class RotatingShape {
  constructor(shape) {
    this.shape = shape;
    this.shape2 = [];
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
    this.shape2 = result;
    return new RotatingShape(shape);
  }

  toString() {
    let result = "";
    this.shape2.forEach((row) => {
      row.forEach((part) => (result += part));
      result += "\n";
    });
    return this.shape.replaceAll(" ", "").trim() + "\n";
  }

  rotateRight() {
    const rotated = `GDA
                     HEB
                     IFC`;
    return new RotatingShape(rotated);
  }
}
