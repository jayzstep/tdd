const fs = require("fs");
export function readFile(filename) {
  const data = fs.readFileSync(filename, "utf8");
  const lines = data.split("\n");
  const filteredLines = lines.filter((line) => line.startsWith("#") == false);
  return filteredLines;
}

export class GameOfLife {
  constructor(fileReader, filename) {
    this.fileReader = fileReader;
    this.filename = filename;
    this.state = fileReader(filename)[1];
  }
  toString() {
    return this.state;
  }
}
