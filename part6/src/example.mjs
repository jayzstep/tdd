const fs = require("fs");
export function readFile(filename) {
  const data = fs.readFileSync(filename, "utf8");
  const lines = data.split("\n");
  const filteredLines = lines.filter((line) => line.startsWith("#") == false);
  const x = parseInt(filteredLines[0].split(" ")[2].replace(",", ""));
  const y = 3;
  return [{ x, y }, filteredLines[1]];
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
