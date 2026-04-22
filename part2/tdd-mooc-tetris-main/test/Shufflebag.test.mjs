import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Shufflebag } from "../src/Shufflebag.mjs";

describe("Shufflebag with one each", () => {
  let shufflebag;
  let values;
  beforeEach(() => {
    values = [0, 1, 2, 3, 4, 5, 6];
    shufflebag = new Shufflebag(values);
  });

  test("returns a value between 0 and 6", () => {
    const value = shufflebag.next();
    expect(values).to.include(value);
  });

  test("returns values from 0 to 6 once each", () => {
    const result = new Set();
    for (let i = 0; i < 7; i++) {
      result.add(shufflebag.next());
    }
    expect(result.size).to.equal(7);
  });

  test("keeps returning values after first 6", () => {
    const result = new Set();
    for (let i = 0; i < 20; i++) {
      result.add(shufflebag.next());
    }
    expect(result.size).to.equal(7);
  });
});

describe("Shufflebag with distribution", () => {
  let shufflebag;
  beforeEach(() => {
    shufflebag = new Shufflebag();
  });
  test("adding one returns one", () => {
    shufflebag.add(1, 1);
    const result = shufflebag.next();
    expect(result).to.equal(1);
  });

  test("adding several eventually returns them all", () => {
    shufflebag.add(1, 3);
    shufflebag.add(2, 2);
    const result = new Set();
    for (let i = 0; i < 50; i++) {
      result.add(shufflebag.next());
    }
    expect(result.size).to.equal(2);
  });
});
