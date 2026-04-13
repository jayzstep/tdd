import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";

class Observer {
  constructor() {
    this.updated = false;
  }
  update() {
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
});
