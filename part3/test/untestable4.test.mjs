import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import argon2 from "@node-rs/argon2";
import pg from "pg";
import { afterEach, beforeEach, describe, test } from "vitest";
import { PasswordService, PostgresUserDao } from "../src/untestable4.mjs";
import { expect } from "chai";

function connectTestDb() {
  const db = new pg.Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.TEST_DATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
  });
  return db;
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const dropTables = readFileSync(
  join(__dirname, "../src/drop-tables.sql"),
  "utf8",
);
const createTables = readFileSync(
  join(__dirname, "../src/create-tables.sql"),
  "utf8",
);

describe("Untestable 4: enterprise application", () => {
  let service;
  let postgresUserDao;
  let db;
  beforeEach(async () => {
    db = connectTestDb();
    await db.query(dropTables);
    await db.query(createTables);
    postgresUserDao = new PostgresUserDao(db);
    service = new PasswordService(postgresUserDao);
  });

  afterEach(() => {
    db.end();
  });

  test("Dao finds user by id", async () => {
    await db.query("INSERT INTO users  VALUES (1, 'dipdap')");
    const user = await postgresUserDao.getById(1);
    expect(user).toEqual({ userId: 1, passwordHash: "dipdap" });
  });

  test("Dao saving works", async () => {
    await postgresUserDao.save({ userId: 2, passwordHash: "zipzap" });
    const addedUser = await db.query("SELECT * FROM users WHERE user_id = 2");
    expect(addedUser.rows[0]).toEqual({ user_id: 2, password_hash: "zipzap" });
  });

  test("password changes", async () => {
    const oldPassword = "dipdap";
    const newPassword = "rilke88";

    await db.query("INSERT INTO users VALUES ($1, $2)", [
      55,
      argon2.hashSync(oldPassword),
    ]);

    await service.changePassword(55, oldPassword, newPassword);
    const query = await db.query(
      "SELECT password_hash FROM users WHERE user_id = 55",
    );
    const savedPassword = query.rows[0].password_hash;

    expect(argon2.verifySync(savedPassword, newPassword)).toBe(true);
  });

  test("throws error on wrong old password", async () => {
    await db.query("INSERT INTO users VALUES ($1, $2)", [
      999,
      argon2.hashSync("rrrzzzuuu"),
    ]);

    await expect(
      service.changePassword(999, "wrongOldPassword", "newpass"),
    ).rejects.toThrow("wrong old password");
  });
});
