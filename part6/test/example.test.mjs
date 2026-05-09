import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { readFile, GameOfLife } from "../src/example.mjs";

describe("Walking skeleton", () => {
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
    expect(gameOfLife.livingCells).toEqual([{ x: 4, y: 0 }]);
  });

  test("parses digits correctly in front of o", () => {
    const lonelyCell = [{ x: 1, y: 1 }, "b3o!"];
    const gameOfLife = new GameOfLife(lonelyCell);
    expect(gameOfLife.livingCells).toEqual([
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
    ]);
  });

  test("parses digits correctly even when > 9", () => {
    const lonelyCell = [{ x: 1, y: 1 }, "30bo!"];
    const gameOfLife = new GameOfLife(lonelyCell);
    expect(gameOfLife.livingCells).toEqual([{ x: 30, y: 0 }]);
  });

  test("parses row change", () => {
    const lonelyCell = [{ x: 1, y: 1 }, "bbo$obo!"];
    const gameOfLife = new GameOfLife(lonelyCell);
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
    expect(gameOfLife.toString()).toEqual("b!");
  });

  test.skip("tick works", () => {
    const gameOfLife = new GameOfLife(readFile, "glider.rle");
    gameOfLife.tick();
    expect(gameOfLife.toString()).toEqual("3b$obo$b2o$bob!");
  });
});
