const fs = require("fs");
export function readFile() {
  const data = fs.readFileSync("hello.txt", "utf8");

  return data.trim();
}
