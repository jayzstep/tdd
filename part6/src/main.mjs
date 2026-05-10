import { readFile, GameOfLife } from "./GameOfLife.mjs";

const gameOfLife = new GameOfLife(readFile(process.argv[2]));
const ticks = process.argv[3];
let i = 0;
while (i < ticks) {
  gameOfLife.tick();
  i++;
}

console.log(gameOfLife.output());
