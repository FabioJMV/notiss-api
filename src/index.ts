import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import notesRoutes from "./note/note.routes";

const PORT = Number.parseInt(process.env.PORT || "3000");

const app = new Hono();

app.use(prettyJSON());
app.use(logger());

app.route("/notiss", notesRoutes);

serve({
  fetch: app.fetch,
  port: PORT
});
