import { zValidator } from "@hono/zod-validator";
import db from "db";
import { note as notedb } from "db/schema";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { NoteInsertSchema } from "./note.repository";

const app = new Hono();

app.get("/notes", async ({ json }) => {
  const note = await db.select().from(notedb);

  if (!Array.isArray(note)) {
    return json({ error: "Notes not found" }, 404);
  }

  return json(note);
});
app.get("/notes/:id", async ({ req, json }) => {
  const id = Number.parseInt(req.param("id"));
  const [note] = await db.select().from(notedb).where(eq(notedb.id, id));

  if (!note) {
    return json({ error: "Note not found" }, 404);
  }

  return json(note);
});
app.post("/notes", zValidator("json", NoteInsertSchema), async (c) => {
  const { title, content } = await c.req.json();
  const [note] = await db.insert(notedb).values({ title, content });

  if (note.serverStatus !== 2) {
    return c.json({ error: "Note not created" }, 500);
  }

  return c.text("Note created", 201);
});
app.put("/notes/:id", zValidator("json", NoteInsertSchema), async (c) => {
  const id = Number.parseInt(c.req.param("id"));
  const { title, content } = await c.req.json();
  const [note] = await db.update(notedb).set({ title, content }).where(eq(notedb.id, id));

  if (note.serverStatus !== 2) {
    return c.json({ error: "Note not updated" }, 500);
  }

  return c.text("Note updated", 200);
});
app.delete("/notes/:id", async (c) => {
  const id = Number.parseInt(c.req.param("id"));
  const [note] = await db.delete(notedb).where(eq(notedb.id, id));

  if (note.serverStatus !== 2) {
    return c.json({ error: "Note not deleted" }, 500);
  }

  return c.text("Note deleted", 200);
});

export default app;
