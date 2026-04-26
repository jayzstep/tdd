import { describe, test } from "vitest";
import { expect } from "chai";
import { parsePeopleCsv, readCsv } from "../src/untestable3.mjs";

// example input:
// Loid,Forger,,Male
// Anya,Forger,6,Female
// Yor,Forger,27,Female

describe("Untestable 3: CSV file parsing", () => {
  test("parses a line correctly", () => {
    const lineOfData = "Anya, Forger, 6, Female";
    expect(parsePeopleCsv(lineOfData)[0]).toEqual({
      firstName: "Anya",
      lastName: "Forger",
      gender: "f",
      age: 6,
    });
  });

  test("parses several lines correctly", () => {
    const data =
      "Loid, Forger,,Male\nAnya,Forger,6,Female\nYor,Forger,27,Female";
    expect(parsePeopleCsv(data)).toEqual([
      {
        firstName: "Loid",
        lastName: "Forger",
        gender: "m",
      },
      {
        firstName: "Anya",
        lastName: "Forger",
        gender: "f",
        age: 6,
      },
      {
        firstName: "Yor",
        lastName: "Forger",
        gender: "f",
        age: 27,
      },
    ]);
  });
  test("skips empty lines", () => {
    const data = `Dip, Dap, 1, Male

Dob, Dub, 100, Female`;
    expect(parsePeopleCsv(data)).toEqual([
      {
        firstName: "Dip",
        lastName: "Dap",
        gender: "m",
        age: 1,
      },
      {
        firstName: "Dob",
        lastName: "Dub",
        gender: "f",
        age: 100,
      },
    ]);
  });

  test("removes white space", () => {
    const lineOfData = `Dip   ,   Dap ,  1 ,  Male        ';`;
    expect(parsePeopleCsv(lineOfData)).toEqual([
      {
        firstName: "Dip",
        lastName: "Dap",
        gender: "m",
        age: 1,
      },
    ]);
  });

  test("file reading works", async () => {
    const result = await readCsv("test/test.csv");
    expect(result).toEqual("Dip,Dap,1,Male");
  });
});
