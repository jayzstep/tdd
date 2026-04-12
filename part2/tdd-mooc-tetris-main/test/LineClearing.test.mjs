import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";

describe("Line clearing", () => {
  let board;
  beforeEach(() => {
    board = new Board(3, 3);
  });

  test("single full row disappears", () => {
    board.setState([
      [".", ".", "."],
      [".", ".", "."],
      ["B", ".", "B"],
    ]);
    board.drop("B");
    board.tick();
    board.tick();
    board.tick();

    expect(board.toString()).to.equalShape(
      `...
       ...
       ...`
    );
  });

  test("non-empty rows fall down", () => {
    board.setState([
      [".", ".", "."],
      ["B", ".", "."],
      ["B", ".", "B"],
    ]);
    board.drop("B");
    board.tick();
    board.tick();
    board.tick();

    expect(board.toString()).to.equalShape(
      `...
       ...
       B..`
    );
  });
});
