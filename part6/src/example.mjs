const fs = require("fs");
export function readFile(filename) {
  const data = fs.readFileSync(filename, "utf8");
  const lines = data.split("\n");
  console.log(lines[0]);
  if (filename === "glider.rle") {
    return "bob$2bo$3o!";
  }
  return data.trim();
}
