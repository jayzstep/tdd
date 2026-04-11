import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("Moving tetrominoes", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  test("can be moved left", () => {
    board.drop(Tetromino.T_SHAPE2);
    board.moveLeft();

    expect(board.toString()).to.equalShape(
      `..TTT.....
       ...T......
       ..........
       ..........
       ..........
       ..........`
    );
  });
  test("can be moved right", () => {
    board.drop(Tetromino.T_SHAPE2);
    board.moveRight();

    expect(board.toString()).to.equalShape(
      `....TTT...
       .....T....
       ..........
       ..........
       ..........
       ..........`
    );
  });
  test("can be moved down", () => {
    board.drop(Tetromino.T_SHAPE2);
    board.moveDown();

    expect(board.toString()).to.equalShape(
      `..........
       ...TTT....
       ....T.....
       ..........
       ..........
       ..........`
    );
  });
  test("stops moving left at the edge", () => {
    board.drop(Tetromino.T_SHAPE2);
    for (let i = 0; i < 6; i++) {
      board.moveLeft();
    }
    expect(board.toString()).to.equalShape(
      `TTT.......
       .T........
       ..........
       ..........
       ..........
       ..........`
    );
  });
  test("stops moving right at the edge", () => {
    board.drop(Tetromino.T_SHAPE2);
    for (let i = 0; i < 6; i++) {
      board.moveRight();
    }
    expect(board.toString()).to.equalShape(
      `.......TTT
       ........T.
       ..........
       ..........
       ..........
       ..........`
    );
  });
  test("stops moving at the bottom", () => {
    board.drop(Tetromino.T_SHAPE);
    for (let i = 0; i < 10; i++) {
      board.moveDown();
    }
    board.tick();
    expect(board.hasFalling()).to.equal(false);
    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ....T.....
       ...TTT....`
    );
  });
  test("hitting another piece from the top stops movement", () => {
    board.drop(Tetromino.T_SHAPE);
    for (let i = 0; i < 6; i++) {
      board.tick();
    }
    board.drop(Tetromino.T_SHAPE);
    for (let i = 0; i < 6; i++) {
      board.moveDown();
    }
    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ....T.....
       ...TTT....
       ....T.....
       ...TTT....`
    );
  });

  test("hitting another block on the left stops movement", () => {
    board.drop(Tetromino.O_SHAPE);
    for (let i = 0; i < 6; i++) {
      board.moveLeft();
      board.moveDown();
    }
    board.drop(Tetromino.O_SHAPE);
    board.moveDown();
    board.moveDown();
    board.moveDown();
    board.moveLeft();
    board.moveLeft();
    board.moveLeft();
    board.moveLeft();
    board.moveLeft();
    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..OO......
       OOOO......
       OO........`
    );
  });

  test("hitting another block on the right stops movement", () => {
    board.drop(Tetromino.O_SHAPE);
    for (let i = 0; i < 6; i++) {
      board.moveRight();
      board.moveDown();
    }
    board.drop(Tetromino.O_SHAPE);
    board.moveDown();
    board.moveDown();
    board.moveDown();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ......OO..
       ......OOOO
       ........OO`
    );
  });
});
