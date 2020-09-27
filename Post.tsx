import React from 'https://dev.jspm.io/react';
import { Client } from 'https://deno.land/x/mysql/mod.ts';

const client = await new Client().connect({
  hostname: 'localhost',
  username: 'root',
  db: 'deno',
  password: 'password'
});

const posts = await client.query(`SELECT name FROM post`);

export const Post = () => {
  const postItems = posts.map((post: {name: string}) =>
    <p>{post.name}</p>
  );
  return postItems;
};