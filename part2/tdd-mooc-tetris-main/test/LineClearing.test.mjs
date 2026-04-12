import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

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
  test("two rows disappear", () => {
    board = new Board(6, 6);
    board.setState([
      [".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", "."],
      ["B", "B", ".", ".", "B", "B"],
      ["B", "B", ".", ".", "B", "B"],
    ]);
    board.drop(Tetromino.O_SHAPE);
    board.tick();
    board.tick();
    board.tick();
    board.tick();
    board.tick();

    expect(board.toString()).to.equalShape(
      `......
       ......
       ......
       ......
       ......
       ......`
    );
  });
});
