import type { Config } from "drizzle-kit";
import "dotenv/config";

const DB_URL = process.env.DB_URL;

if (!DB_URL) {
  throw new Error("DB_URL not set");
}

export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  driver: "mysql2",
  dbCredentials: {
    uri: DB_URL
  }
} satisfies Config;
