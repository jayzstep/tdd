import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Falling tetrominoes", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  test("start from the top middle", () => {
    board.drop(Tetromino.T_SHAPE);

    expect(board.toString()).to.equalShape(
      `....T.....
       ...TTT....
       ..........
       ..........
       ..........
       ..........`
    );
  });

  test("stop when they hit the bottom", () => {
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ....T.....
       ...TTT....`
    );
  });

  test("stop when they land on another block", () => {
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ....T.....
       ...TTT....
       ....T.....
       ...TTT....`
    );
  });

  test("can be rotated right", () => {
    board.drop(Tetromino.T_SHAPE);
    board.rotateRight();

    expect(board.toString()).to.equalShape(
      `....T.....
       ....TT....
       ....T.....
       ..........
       ..........
       ..........`
    );
  });

  test("can be rotated left", () => {
    board.drop(Tetromino.T_SHAPE);
    board.rotateLeft();

    expect(board.toString()).to.equalShape(
      `....T.....
       ...TT.....
       ....T.....
       ..........
       ..........
       ..........`
    );
  });

  test("can not be rotated right if there is no room", () => {
    board.drop(Tetromino.I_SHAPE);
    board.moveLeft();
    board.rotateRight();
    fallToBottom(board);
    board.drop(Tetromino.I_SHAPE);
    board.rotateRight();
    board.moveRight();
    fallToBottom(board);
    board.drop(Tetromino.I_SHAPE);
    board.rotateRight();
    board.moveDown();
    board.rotateRight();

    expect(board.toString()).to.equalShape(
      `..........
       ....I.....
       ...III....
       ...III....
       ...III....
       ...I.I....`
    );
  });

  test("can not be rotated left if there is no room", () => {
    board.drop(Tetromino.I_SHAPE);
    board.moveLeft();
    board.rotateRight();
    fallToBottom(board);
    board.drop(Tetromino.I_SHAPE);
    board.rotateRight();
    board.moveRight();
    fallToBottom(board);
    board.drop(Tetromino.I_SHAPE);
    board.rotateRight();
    board.moveDown();
    board.rotateLeft();

    expect(board.toString()).to.equalShape(
      `..........
       ....I.....
       ...III....
       ...III....
       ...III....
       ...I.I....`
    );
  });

  test("wall kicks if no room to rotate on the right", () => {
    board.drop(Tetromino.T_SHAPE);
    board.rotateLeft();
    for (let i = 0; i < 6; i++) {
      board.moveRight();
    }

    board.rotateRight();

    expect(board.toString()).to.equalShape(
      `........T.
       .......TTT
       ..........
       ..........
       ..........
       ..........`
    );
  });

  test("wall kicks if no room to rotate on the left", () => {
    board.drop(Tetromino.T_SHAPE);
    board.rotateRight();
    for (let i = 0; i < 6; i++) {
      board.moveLeft();
    }

    board.rotateRight();

    expect(board.toString()).to.equalShape(
      `..........
       TTT.......
       .T........
       ..........
       ..........
       ..........`
    );
  });
});
