const fs = require("fs");
export function readFile(filename) {
  const data = fs.readFileSync(filename, "utf8");
  const lines = data.split("\n");
  const filteredLines = lines.filter((line) => line.startsWith("#") == false);
  const x = parseInt(filteredLines[0].split(" ")[2].replace(",", ""));
  const y = parseInt(filteredLines[0].split(" ")[5].replace(",", ""));
  return [{ x, y }, filteredLines[1]];
}

export class GameOfLife {
  constructor(fileReader, filename) {
    this.fileReader = fileReader;
    this.filename = filename;
    this.fileContent = fileReader(filename);
    this.state = this.fileContent[1];
    this.x = this.fileContent[0].x;
    this.y = this.fileContent[0].y;
  }
  toString() {
    return this.state;
  }
}
