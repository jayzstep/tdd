import { describe, test } from "vitest";
import { expect } from "chai";
import { readFile } from "../src/example.mjs";

describe("Walking skeleton", () => {
  test("reads file", () => {
    const fileContent = readFile("hello.txt");
    expect(fileContent).toEqual("hello");
  });
});
