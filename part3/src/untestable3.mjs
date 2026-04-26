import { readFile } from "node:fs/promises";
import { parse } from "csv-parse/sync";

export async function readCsv(filePath) {
  return await readFile(filePath, { encoding: "utf8" });
}
export function parsePeopleCsv(csvData) {
  const records = parse(csvData, {
    skip_empty_lines: true,
    trim: true,
  });
  return records.map(([firstName, lastName, age, gender]) => {
    const person = {
      firstName,
      lastName,
      gender: gender.charAt(0).toLowerCase(),
    };
    if (age !== "") {
      person.age = parseInt(age);
    }
    return person;
  });
}

// File reading should probably be moved out as it's a global variable
// export async function parsePeopleCsv(filePath) {
//   const csvData = await readFile(filePath, { encoding: "utf8" });
//   const records = parse(csvData, {
//     skip_empty_lines: true,
//     trim: true,
//   });
//   return records.map(([firstName, lastName, age, gender]) => {
//     const person = {
//       firstName,
//       lastName,
//       gender: gender.charAt(0).toLowerCase(),
//     };
//     if (age !== "") {
//       person.age = parseInt(age);
//     }
//     return person;
//   });
// }
