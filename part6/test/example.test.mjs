import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { readFile, GameOfLife } from "../src/example.mjs";

describe("Walking skeleton", () => {
  test("parses pattern from file", () => {
    const fileContent = readFile("glider.rle");
    expect(fileContent[1]).toEqual("bob$2bo$3o!");
  });
  test.skip("parses x and y from file", () => {
    const fileContent = readFile("glider.rle");
    expect(fileContent).toEqual("bob$2bo$3o!");
  });
});

describe("Game of Life", () => {
  test("returns a rle state string", () => {
    const gameOfLife = new GameOfLife(readFile, "glider.rle");
    expect(gameOfLife.toString()).toEqual("bob$2bo$3o!");
  });
});
