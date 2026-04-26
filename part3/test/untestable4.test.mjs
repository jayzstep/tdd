import argon2 from "@node-rs/argon2";
import pg from "pg";
import { afterEach, beforeEach, describe, test } from "vitest";
import { PasswordService, PostgresUserDao } from "../src/untestable4.mjs";

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

describe("Untestable 4: enterprise application", () => {
  let service;
  let postgresUserDao;
  let db;
  beforeEach(() => {
    db = connectTestDb();
    postgresUserDao = new PostgresUserDao(db);
    service = new PasswordService(postgresUserDao);
  });

  afterEach(() => {
    // PostgresUserDao.getInstance().close();
    db.end();
  });

  test("todo", async () => {
    // TODO: write proper tests for both PasswordService and PostgresUserDao
  });
});
