import { describe, test } from "vitest";
import { expect } from "chai";
import { readFile, GameOfLife } from "../src/GameOfLife.mjs";

describe("File reading works", () => {
  test("parses pattern from file", () => {
    const fileContent = readFile("glider.rle");
    expect(fileContent[1]).toEqual("bob$2bo$3o!");
  });
  test("parses x from file", () => {
    const fileContent = readFile("glider.rle");
    expect(fileContent[0].x).toEqual(3);
  });
  test("parses y from file", () => {
    const fileContent = readFile("glider.rle");
    expect(fileContent[0].y).toEqual(3);
  });
});

describe("Game of Life", () => {
  test("returns a rle state string", () => {
    const gameOfLife = new GameOfLife(readFile("glider.rle"));
    expect(gameOfLife.toString()).toEqual("bob$2bo$3o!");
  });

  test("parses a single living cell at 0, 0", () => {
    const lonelyCell = [{ x: 1, y: 1 }, "o!"];
    const gameOfLife = new GameOfLife(lonelyCell);
    expect(gameOfLife.livingCells).toEqual([{ x: 0, y: 0 }]);
  });

  test("parses a single living cell at 0, 1", () => {
    const lonelyCell = [{ x: 1, y: 1 }, "bo!"];
    const gameOfLife = new GameOfLife(lonelyCell);
    expect(gameOfLife.livingCells).toEqual([{ x: 1, y: 0 }]);
  });

  test("parses digits correctly in front of b", () => {
    const lonelyCell = [{ x: 1, y: 1 }, "3bo!"];
    const gameOfLife = new GameOfLife(lonelyCell);
    expect(gameOfLife.livingCells).toEqual([{ x: 3, y: 0 }]);
  });

  test("parses digits correctly in front of o", () => {
    const state = [{ x: 1, y: 1 }, "b3o!"];
    const gameOfLife = new GameOfLife(state);
    expect(gameOfLife.livingCells).toEqual([
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
    ]);
  });

  test("parses digits correctly even when > 9", () => {
    const state = [{ x: 1, y: 1 }, "30bo!"];
    const gameOfLife = new GameOfLife(state);
    expect(gameOfLife.livingCells).toEqual([{ x: 30, y: 0 }]);
  });

  test("parses row change", () => {
    const state = [{ x: 1, y: 1 }, "bbo$obo!"];
    const gameOfLife = new GameOfLife(state);
    expect(gameOfLife.livingCells).toEqual([
      { x: 2, y: 0 },
      { x: 0, y: 1 },
      { x: 2, y: 1 },
    ]);
  });

  test("lone cell DIES", () => {
    const lonelyCell = [{ x: 1, y: 1 }, "o!"];
    const gameOfLife = new GameOfLife(lonelyCell);
    gameOfLife.tick();
    expect(gameOfLife.toString()).toEqual("!");
  });

  test("cell with one neighbour dies. Or I guess both die.", () => {
    const state = [{ x: 1, y: 1 }, "oo!"];
    const gameOfLife = new GameOfLife(state);
    gameOfLife.tick();
    expect(gameOfLife.toString()).toEqual("!");
  });

  test("cell with more than 3 neighbours dies", () => {
    const state = [{ x: 3, y: 2 }, "ooo$boo!"];
    const gameOfLife = new GameOfLife(state);
    gameOfLife.tick();
    expect(gameOfLife.toString()).toEqual("bob$obo$obo!");
  });

  test("blinker tick works", () => {
    const state = [{ x: 3, y: 1 }, "ooo!"];
    const gameOfLife = new GameOfLife(state);
    gameOfLife.tick();
    expect(gameOfLife.toString()).toEqual("bob$bob$bob!");
  });

  test("glider tick works", () => {
    const gameOfLife = new GameOfLife(readFile("glider.rle"));
    gameOfLife.tick();
    expect(gameOfLife.toString()).toEqual("3b$obo$b2o$bob!");
  });

  test("block tick works", () => {
    const state = [{ x: 2, y: 2 }, "oo$oo!"];
    const gameOfLife = new GameOfLife(state);
    gameOfLife.tick();
    expect(gameOfLife.toString()).toEqual("2o$2o!");
  });

  test("glider works after 2 ticks", () => {
    const gameOfLife = new GameOfLife(readFile("glider.rle"));
    gameOfLife.tick();
    gameOfLife.tick();
    expect(gameOfLife.toString()).toEqual("3b$2bo$obo$b2o!");
  });
});

describe("Final output", () => {
  test("outputs a block in RLE format", () => {
    const state = [{ x: 2, y: 2 }, "oo$oo!"];
    const gameOfLife = new GameOfLife(state);
    expect(gameOfLife.output()).toEqual("x = 2, y = 2\n2o$2o!");
  });
  test("outputs a glider after a tick in RLE format", () => {
    const gameOfLife = new GameOfLife(readFile("glider.rle"));
    gameOfLife.tick();
    expect(gameOfLife.output()).toEqual("x = 3, y = 4\n3b$obo$b2o$bob!");
  });
});
