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
});
