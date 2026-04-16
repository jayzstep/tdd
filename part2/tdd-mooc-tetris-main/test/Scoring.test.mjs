import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Scoring } from "../src/Scoring.mjs";

describe("Scoring", () => {
  let scoring;
  beforeEach(() => {
    scoring = new Scoring();
  });

  test("cleared row scores 40 points", () => {
    scoring.update(1);
    expect(scoring.score).to.equal(40);
  });

  test("two cleared rows scores 100 points", () => {
    scoring.update(2);
    expect(scoring.score).to.equal(100);
  });

  test("sums score correctly", () => {
    scoring.update(1);
    scoring.update(2);
    scoring.update(3);
    scoring.update(4);
    expect(scoring.score).to.equal(1640);
  });

  test("levels up after 10 cleared rows", () => {
    expect(scoring.level).to.equal(1);
    scoring.update(4);
    scoring.update(4);
    scoring.update(2);
    scoring.update(2);
    expect(scoring.level).to.equal(2);
  });

  test("leveling affects the score like it should", () => {
    scoring.update(4);
    scoring.update(4);
    scoring.update(4);
    expect(scoring.score).to.equal(3600);
  });
});
