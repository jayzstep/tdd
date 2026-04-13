import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";

class Observer {
  constructor() {
    this.updated = false;
    this.rowsDeleted = 0;
  }
  update(rowAmount) {
    this.rowsDeleted = rowAmount;
    this.updated = true;
  }
}

describe("Notification", () => {
  let board;
  let observer;
  beforeEach(() => {
    board = new Board(3, 3);
    observer = new Observer();
    board.subscribe(observer);
  });

  test("subscribing works", () => {
    expect(board.subscriber).to.instanceof(Observer);
  });

  test("update works", () => {
    board.setState([
      [".", ".", "."],
      [".", ".", "."],
      ["B", ".", "B"],
    ]);
    board.drop("B");
    board.tick();
    board.tick();
    board.tick();
    expect(observer.updated).to.equal(true);
  });

  test("does not update if no rows are deleted", () => {
    board.drop("B");
    board.tick();
    expect(observer.updated).to.equal(false);
  });

  test("updates when one row is deleted", () => {
    board.setState([
      [".", ".", "."],
      [".", ".", "."],
      ["B", ".", "B"],
    ]);
    board.drop("B");
    board.tick();
    board.tick();
    board.tick();
    expect(observer.rowsDeleted).to.equal(1);
  });
});
