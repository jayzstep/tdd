const fs = require("fs");
export function readFile(filename) {
  const data = fs.readFileSync(filename, "utf8");
  const lines = data.split("\n");
  console.log(lines[5]);
  if (filename === "glider.rle") {
    return lines[5];
  }
  return data.trim();
}
