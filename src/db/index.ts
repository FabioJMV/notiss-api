import { drizzle } from "drizzle-orm/mysql2";
import { createPool } from "mysql2/promise";
import * as schema from "./schema";

const DB_URL = process.env.DB_URL;

if (!DB_URL) {
  console.error("No DB_URL provided");
  process.exit(1);
}

const pool = createPool(DB_URL);
const db = drizzle(pool, {
  mode: "default",
  schema
});

export default db;
