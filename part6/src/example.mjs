const fs = require("fs");
export function readFile(filename) {
  const data = fs.readFileSync(filename, "utf8");
  const lines = data.split("\n");
  const filteredLines = lines.filter((line) => line.startsWith("#") == false && line.startsWith("x") == false);
  return filteredLines[0];
}

export class GameOfLife {
  constructor(fileReader, filename) {
    this.fileReader = fileReader;
    this.filename = filename;
    this.state = fileReader(filename);
  }

  toString() {
    return this.state;
  }

  readFile(filename) {
    return this.fileReader(filename);
  }
}
