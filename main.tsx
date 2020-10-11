import { createApp, serveStatic } from 'https://servestjs.org/@/mod.ts';
// @deno-types="https://servestjs.org/@/types/react/index.d.ts"
import React from 'https://dev.jspm.io/react/index.js';
// @deno-types="https://servestjs.org/@/types/react-dom/server/index.d.ts"
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server.js';
import { Post, addPost } from './Post.tsx';

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
              <button onClick={addPost}>+</button>
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
