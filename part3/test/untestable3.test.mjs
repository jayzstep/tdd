import { describe, test } from "vitest";
import { expect } from "chai";
import { parsePeopleCsv } from "../src/untestable3.mjs";

// example input:
// Loid,Forger,,Male
// Anya,Forger,6,Female
// Yor,Forger,27,Female

describe("Untestable 3: CSV file parsing", () => {
  test.skip("todo", async () => {
    // TODO: write proper tests
    try {
      expect(await parsePeopleCsv("people.csv")).to.deep.equal([]);
    } catch (e) {}
  });
  test("parses a line correctly", () => {
    const lineOfData = "Anya, Forger, 6, Female";
    expect(parsePeopleCsv(lineOfData)[0]).toEqual({
      firstName: "Anya",
      lastName: "Forger",
      gender: "f",
      age: 6,
    });
  });
});
