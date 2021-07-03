import { serve } from "https://deno.land/std/http/server.ts";
const s = serve({ port: 1993 });
console.log("http://localhost:1993/");
for await (const req of s) {
  req.respond({ body: "Hell Word\n" });
}
