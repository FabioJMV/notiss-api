import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";

const PORT = Number.parseInt(process.env.PORT || "3000");

const app = new Hono();

app.use(prettyJSON());

app.get("/", (c) => c.text("Hello from Hono!"));

serve({
  fetch: app.fetch,
  port: PORT
});
