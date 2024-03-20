import { int, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";

export const note = mysqlTable("note", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 25 }).notNull(),
  content: text("content").notNull()
});
