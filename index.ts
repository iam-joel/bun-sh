import figlet from 'figlet';

const server = Bun.serve({
  port: 3000,
  fetch(request, server) {
    const body = figlet.textSync("Hola!");
    return new Response(body);
  },
})

console.log(`Listening on PORT ${server.port}`)