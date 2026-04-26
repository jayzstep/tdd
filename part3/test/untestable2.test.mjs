import { describe, test } from "vitest";
import { expect } from "chai";
import { diceHandValue, DiceRoller } from "../src/untestable2.mjs";

class fakeDiceRoller {
  constructor(values) {
    this.values = values;
    this.index = 0;
  }
  roll() {
    const result = this.values[this.index];
    this.index = (this.index + 1) % this.values.length;
    return result;
  }
}

describe("Untestable 2: a dice game", () => {
  test("returns a number", () => {
    // TODO: write proper tests
    expect(diceHandValue()).to.be.a("number");
  });

  test("returns the value of the bigger dice", () => {
    const fakeDice = new fakeDiceRoller([3, 2]);
    expect(diceHandValue(fakeDice)).to.equal(3);
  });

  test("returns 100 + dice value when dice are same", () => {
    const fakeDice = new fakeDiceRoller([4, 4]);
    expect(diceHandValue(fakeDice)).to.equal(104);
  });

  test("dice rolls are between 1 and 6", () => {
    const rolls = new Set();
    const diceRoller = new DiceRoller();
    for (let i = 0; i < 100; i++) {
      rolls.add(diceRoller.roll());
    }
    expect(Array.from(rolls).sort()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
