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
    board.drop(Tetromino.T_SHAPE2);

    expect(board.toString()).to.equalShape(
      `...TTT....
       ....T.....
       ..........
       ..........
       ..........
       ..........`
    );
  });

  test("stop when they hit the bottom", () => {
    board.drop(Tetromino.T_SHAPE2);
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ...TTT....
       ....T.....`
    );
  });

  test("stop when they land on another block", () => {
    board.drop(Tetromino.T_SHAPE2);
    fallToBottom(board);
    board.drop(Tetromino.T_SHAPE2);
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ...TTT....
       ....T.....
       ...TTT....
       ....T.....`
    );
  });

  test("can be rotated right", () => {
    board.drop(Tetromino.T_SHAPE2);
    board.rotateRight();

    expect(board.toString()).to.equalShape(
      `....T.....
       ...TT.....
       ....T.....
       ..........
       ..........
       ..........`
    );
  });

  test("can be rotated left", () => {
    board.drop(Tetromino.T_SHAPE2);
    board.rotateLeft();

    expect(board.toString()).to.equalShape(
      `....T.....
       ....TT....
       ....T.....
       ..........
       ..........
       ..........`
    );
  });

  test("can not be rotated right if there is no room", () => {
    board.drop(Tetromino.I_SHAPE);
    board.moveDown();
    board.moveLeft();
    board.rotateRight();
    fallToBottom(board);
    board.drop(Tetromino.I_SHAPE);
    board.moveDown();
    board.rotateRight();
    board.moveRight();
    fallToBottom(board);
    board.drop(Tetromino.I_SHAPE);
    board.moveDown();
    board.rotateRight();
    board.moveDown();
    board.rotateRight();

    expect(board.toString()).to.equalShape(
      `..........
       .....I....
       ....III...
       ....III...
       ....III...
       ....I.I...`
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
       .....I....
       ....III...
       ....III...
       ....III...
       ....I.I...`
    );
  });

  test("wall kicks if no room to rotate on the right", () => {
    board.drop(Tetromino.T_SHAPE2);
    board.rotateLeft();
    for (let i = 0; i < 6; i++) {
      board.moveRight();
    }

    board.rotateRight();

    expect(board.toString()).to.equalShape(
      `..........
       .......TTT
       ........T.
       ..........
       ..........
       ..........`
    );
  });

  test("wall kicks if no room to rotate on the left", () => {
    board.drop(Tetromino.T_SHAPE2);
    board.rotateRight();
    for (let i = 0; i < 6; i++) {
      board.moveLeft();
    }

    board.rotateLeft();

    expect(board.toString()).to.equalShape(
      `..........
       TTT.......
       .T........
       ..........
       ..........
       ..........`
    );
  });
  test("wall kicks if no room to rotate to the left", () => {
    board.drop(Tetromino.T_SHAPE);
    board.rotateRight();
    for (let i = 0; i < 6; i++) {
      board.moveLeft();
    }

    board.rotateLeft();

    expect(board.toString()).to.equalShape(
      `.T........
       TTT.......
       ..........
       ..........
       ..........
       ..........`
    );
  });

  test("wall kicks from another piece", () => {
    board.drop(Tetromino.I_SHAPE);
    board.rotateRight();
    fallToBottom(board);
    board.drop(Tetromino.T_SHAPE);
    board.moveRight();
    board.rotateRight();
    board.moveDown();
    board.moveDown();
    board.moveDown();
    board.rotateLeft();

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       .....I....
       .....I.T..
       .....ITTT.
       .....I....`
    );
  });
});
