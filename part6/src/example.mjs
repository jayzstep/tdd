const fs = require("fs");
export function readFile(filename) {
  const data = fs.readFileSync(filename, "utf8");
  const lines = data.split("\n");
  const filteredLines = lines.filter((line) => line.startsWith("#") == false && line.startsWith("x") == false);
  console.log(filteredLines);
  if (filename === "glider.rle") {
    return filteredLines[0];
  }
  return filteredLines[0];
}
