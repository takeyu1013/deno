import { serve } from "https://deno.land/std@0.68.0/http/server.ts";
import React from "https://dev.jspm.io/react";
import ReactDOMServer from "https://dev.jspm.io/react-dom/server";

const server = serve({ port: 8080 });
console.log("http://localhost:8080/");
for await (const request of server) {
  request.respond({
    body: ReactDOMServer.renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>deno react app</title>
        </head>
        <body>Hell, Word!</body>
      </html>
    )
  });
}