FROM hayd/alpine-deno
WORKDIR /app
COPY . .
CMD [ "run", "--allow-net", "src/main.jsx" ]