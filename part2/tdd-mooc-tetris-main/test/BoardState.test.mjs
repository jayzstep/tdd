import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";

describe("Board state", () => {
  let board;
  beforeEach(() => {
    board = new Board(3, 3);
  });

  test("setting works", () => {
    board.setState([
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ]);
    expect(board.toString()).to.equalShape(
      `...
       ...
       ...`
    );
  });
});
