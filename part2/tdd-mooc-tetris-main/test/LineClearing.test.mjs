import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";

describe("Line clearing", () => {
  let board;
  beforeEach(() => {
    board = new Board(3, 3);
  });

  test.skip("single full row disappears", () => {
    board.setState([
      [".", ".", "."],
      [".", ".", "."],
      ["B", ".", "B"],
    ]);
    board.drop("B");
    board.tick();
    board.tick();

    expect(board.toString()).to.equalShape(
      `...
       ...
       ...`
    );
  });
});
