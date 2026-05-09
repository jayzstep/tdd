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
  constructor(fileContent) {
    this.state = fileContent[1];
    this.x = fileContent[0].x;
    this.y = fileContent[0].y;
    this.livingCells = [{ x: 0, y: 0 }];
  }
  toString() {
    return this.state;
  }
  tick() {
    this.state = "b!";
  }
}
