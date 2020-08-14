import { serve } from "https://deno.land/std@0.64.0/http/server.ts";

const server = serve({ port: 8080 });
console.log("http://localhost:8080/");

for await (const request of server) {
    request.respond({ body: "<h1>Hell, World!!!!!</h1>"});
}