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
