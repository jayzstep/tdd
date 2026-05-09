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
    this.livingCells = [];
    this.parseLivingCells(this.state);
  }

  toString() {
    return this.state;
  }

  tick() {
    this.state = "b!";
  }

  parseLivingCells(string) {
    let x = 0;
    let y = 0;
    let counter = 0;
    let accumulated = "";
    const numbers = "0123456789";
    const stringAsArray = Array.from(string);
    stringAsArray.forEach((char) => {
      if (char === "o") {
        do {
          this.livingCells.push({ x, y });
          x++;
          counter--;
          counter = Math.max(counter, 0);
        } while (counter > 0);
        accumulated = "";
      }
      if (char === "b") {
        if (counter > 0) {
          x += counter;
          counter = 0;
        } else {
          x++;
        }
        accumulated = "";
      }
      if (numbers.includes(char)) {
        accumulated += char;
        counter = parseInt(accumulated);
      }
      if (char === "$") {
        y++;
        x = 0;
      }
    });
    return;
  }
}
