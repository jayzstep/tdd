import { describe, test } from "vitest";
import { expect } from "chai";
import { daysUntilChristmas } from "../src/untestable1.mjs";

class FakeClock {
  constructor(year, month, day) {
    this.date = new Date(year, month, day);
  }
  now() {
    return this.date;
  }
}

describe("Untestable 1: days until Christmas", () => {
  test("returns a number", () => {
    expect(daysUntilChristmas()).to.be.a("number");
  });
  test("is 0 on Christmas day", () => {
    const clock = new FakeClock(2026, 12 - 1, 25);
    expect(daysUntilChristmas(clock)).to.equal(0);
  });
});
