const fs = require("fs");
export function readFile(filename) {
  const data = fs.readFileSync(filename, "utf8");
  const lines = data.split("\n");
  const filteredLines = lines.filter((line) => line.startsWith("#") == false && line.startsWith("x") == false);
  return filteredLines[0];
}

export class GameOfLife {
  constructor(filename) {
    this.fileReader = readFile;
    this.filename = filename;
  }
  toString() {
    return readFile(this.filename);
  }
  readFile(filename) {
    const data = fs.readFileSync(filename, "utf8");
    const lines = data.split("\n");
    const filteredLines = lines.filter((line) => line.startsWith("#") == false && line.startsWith("x") == false);
    return filteredLines[0];
  }

  readFile2(filename) {
    return this.fileReader(this.filename);
  }
}
