import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { ScoringSystem } from "../src/ScoringSystem.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("Board scoring", () => {
  let board;
  let scoring;
  beforeEach(() => {
    board = new Board(3, 3);
    scoring = new ScoringSystem();
    board.subscribe(scoring);
  });

  test("scoring starts at 0", () => {
    board.drop("B");
    board.tick();
    board.tick();
    board.tick();
    expect(scoring.score).to.equal(0);
  });

  test("clearing one row updates score", () => {
    board.setState([
      [".", ".", "."],
      [".", ".", "."],
      ["B", ".", "B"],
    ]);
    board.drop("B");
    board.tick();
    board.tick();
    board.tick();
    expect(scoring.score).to.equal(40);
  });

  test("clearing multiple rows updates score", () => {
    board.setState([
      [".", ".", "."],
      [".", ".", "B"],
      [".", ".", "B"],
    ]);

    board.drop(Tetromino.O_SHAPE);
    board.tick();
    board.tick();
    board.tick();
    expect(scoring.score).to.equal(100);
  });
});
