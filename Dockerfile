FROM denoland/deno
EXPOSE 1993
WORKDIR /app
ADD . .
RUN deno cache main.ts
CMD [ "run", "--allow-net", "main.ts" ]