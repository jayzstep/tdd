import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Scoring } from "../src/Scoring.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("Board scoring", () => {
  let board;
  let scoring;
  beforeEach(() => {
    board = new Board(3, 3);
    scoring = new Scoring();
    board.subscribe(scoring);
  });

  test("clearing one row updates score", () => {
    board.setState([
      [".", ".", "."],
      [".", ".", "."],
      ["B", ".", "B"],
    ]);
    expect(scoring.score).to.equal(0);
    board.drop("B");
    board.tick();
    board.tick();
    board.tick();
    expect(scoring.score).to.equal(40);
  });

  test("clearing multiple rows updates score", () => {
    board.setState([
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "B"],
      [".", ".", "B"],
    ]);

    board.drop(Tetromino.O_SHAPE);
    board.tick();
    board.tick();
    board.tick();
    expect(scoring.score).to.equal(40);
  });
});
