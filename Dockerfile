FROM hayd/alpine-deno:1.2.3
WORKDIR /app
COPY . .
CMD ["run", "--allow-net" , "src/main.ts"]
