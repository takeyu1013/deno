import { Application, send, Router } from 'https://deno.land/x/oak/mod.ts';
import React from 'https://dev.jspm.io/react';
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';
import { Post } from './Post.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any;
    }
  }
}

const App = () => {
  return (
    <main>
      <div className="wrapper">
        <button>+</button>
      </div>
      <div className="post-wrapper">
        <p>カップラーメン</p>
        <p>洗濯</p>
        <p>昼寝</p>
        <Post />
      </div>
    </main>
  );
};

const Body = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>deno react app</title>
        <link href="style.css" rel="stylesheet" />
      </head>
      <body>
        <App />
      </body>
    </html>
  );
};

const body = ReactDOMServer.renderToString(<Body />);

const app = new Application();
const router = new Router();

router.get('/', (context) => {
  context.response.body = `
    <!DOCTYPE html>
    ${ReactDOMServer.renderToString(<Body />)}
  `;
});

router.get('/style.css', async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/public`
  });
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 });
