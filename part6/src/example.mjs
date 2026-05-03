const fs = require("fs");
export function readFile(filename) {
  const data = fs.readFileSync(filename, "utf8");

  return data.trim();
}
