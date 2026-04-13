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
  beforeEach(() => {
    let board = new Board(3, 3);
    let observer = new Observer();
  });
  test("subscribing works", () => {});
});
