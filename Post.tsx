// @deno-types="https://servestjs.org/@/types/react/index.d.ts"
import React from 'https://dev.jspm.io/react';
import { Client } from 'https://deno.land/x/mysql/mod.ts';

const client = await new Client().connect({
  hostname: 'localhost',
  username: 'root',
  db: 'deno',
  password: 'password'
});

const records = await client.query(`SELECT name FROM post`);

export const Post = () => {
  const posts = records.map((post: { name: string }) =>
    <p>{post.name}</p>
  );
  return posts;
};

export async function addPost() {
  const result = await client.execute(`INSERT INTO post(name) values(?)`, ["test"]);
}