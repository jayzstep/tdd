const fs = require("fs");
export function readFile() {
  const data = fs.readFileSync("hello.txt", "utf8");
  console.log(data);
  return "hello";
}
