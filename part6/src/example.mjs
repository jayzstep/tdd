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
    let result = "";
    for (let i = 0; i < this.y; i++) {
      if (i > 0) {
        result += "$";
      }
      for (let j = 0; j < this.x; j++) {
        if (this.livingCells.some((c) => c.x == j && c.y == i)) {
          result += "o";
        } else {
          result += "b";
        }
      }
    }
    result += "!";
    let result2 = "";
    let accumulated = "";
    Array.from(result).forEach((char) => {
      if (accumulated == "") {
        accumulated += char;
        return;
      }
      if (char == accumulated[accumulated.length - 1]) {
        accumulated += char;
      } else {
        result2 += String(accumulated.length == 1 ? "" : accumulated.length) + accumulated[0];
        accumulated = char;
      }
    });
    result2 += "!";
    if (!result2.includes("o")) {
      return "!";
    }
    return result2;
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

  tick() {
    this.livingCells = this.calculateNewState();
  }

  calculateNewState() {
    const result = [];
    const deltas = [-1, 0, 1];
    for (const livingCell of this.livingCells) {
      let neighbours = 0;
      for (const dx of deltas) {
        for (const dy of deltas) {
          if (dx == 0 && dy == 0) {
            continue;
          }
          if (this.livingCells.some((c) => c.x == livingCell.x + dx && c.y == livingCell.y + dy)) {
            neighbours++;
          }
        }
      }
      if (neighbours >= 2 && neighbours < 4) {
        result.push(livingCell);
      }
    }
    return result;
  }
}
