import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Shufflebag } from "../src/Shufflebag.mjs";

describe("Shufflebag", () => {
  let shufflebag;
  beforeEach(() => {
    shufflebag = new Shufflebag();
  });
  test("returns a value between 0 and 6", () => {
    const values = [0, 1, 2, 3, 4, 5, 6];
    const value = shufflebag.next();
    expect(values).to.include(value);
  });
});
