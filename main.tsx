import { createApp, serveStatic } from 'https://servestjs.org/@/mod.ts';
import React from 'https://dev.jspm.io/react'
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';
import { Post } from './Post.tsx';

const app = createApp();
app.use(serveStatic('./public'));
app.handle('/', async (request) => {
  await request.respond({
    status: 200,
    headers: new Headers({
      'content-type': 'text/html; charset=utf-8'
    }),
    body: ReactDOMServer.renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>deno react app</title>
          <link href="style.css" rel="stylesheet" />
        </head>
        <body>
          <main>
            <div className="wrapper">
              <button>+</button>
            </div>
            <div className="post-wrapper">
              <Post />
            </div>
          </main>
        </body>
      </html>
    )
  });
});
app.listen({ port: 8080 });
