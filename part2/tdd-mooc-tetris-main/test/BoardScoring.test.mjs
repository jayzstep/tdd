import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Scoring } from "../src/Scoring.mjs";

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
});
