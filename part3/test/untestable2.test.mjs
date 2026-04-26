import { describe, test } from "vitest";
import { expect } from "chai";
import { diceHandValue } from "../src/untestable2.mjs";

class fakeDiceRoller {
  constructor(values) {
    this.values = values;
    this.index = 0;
  }
  roll() {
    result = this.values[this.index];
    this.index = (this.index + 1) % this.values.length;
  }
}

describe("Untestable 2: a dice game", () => {
  test("returns a number", () => {
    // TODO: write proper tests
    expect(diceHandValue()).to.be.a("number");
  });
});
