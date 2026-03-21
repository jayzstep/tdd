export class RotatingShape {
  constructor(shape) {
    this.shape = shape;
  }
  static fromString(shape) {
    return new RotatingShape(shape);
  }

  toString() {
    return this.shape.replaceAll(" ", "").trim() + "\n";
  }
}
