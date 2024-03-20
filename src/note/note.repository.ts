import { note } from "db/schema";
import { createInsertSchema } from "drizzle-zod";

export type NoteInsertType = typeof note.$inferInsert;
export const NoteInsertSchema = createInsertSchema(note, {
  title: (schema) =>
    schema.title.min(1, "Title is required").max(25, "Title is too long"),
  content: (schema) =>
    schema.title.min(1, "Content is required").max(1000, "Content is too long")
});
