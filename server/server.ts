import { serveFile } from "jsr:@std/http/file-server";

Deno.serve((req) => {
  const url = req.url;
  const path = new URL(url).pathname;
  if (path === "/") {
    return serveFile(req, "index.html");
  }
  return serveFile(req, path.slice(1)); // remove leading slash
});
