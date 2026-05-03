import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { readFile, GameOfLife } from "../src/example.mjs";

describe("Walking skeleton", () => {
  let gameOfLife;
  beforeEach(() => {
    gameOfLife = new GameOfLife();
  });
  test("reads file", () => {
    const fileContent = gameOfLife.readFile("hello.txt");
    expect(fileContent).toEqual("hello");
  });
  test("parses pattern", () => {
    const fileContent = readFile("glider.rle");
    expect(fileContent).toEqual("bob$2bo$3o!");
  });
});

describe("Game of Life", () => {
  test("returns a rle state string", () => {
    const gameOfLife = new GameOfLife("glider.rle");
    expect(gameOfLife.toString()).toEqual("bob$2bo$3o!");
  });
});
