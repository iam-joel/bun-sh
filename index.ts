import figlet from 'figlet';

const server = Bun.serve({
  port: 3000,
  fetch(request, server) {
    const url =   new URL(request.url);
    if(url.pathname == '/'){
      const body = figlet.textSync("home");
      return new Response(body);
    }
    if(url.pathname == '/about'){
      const body = figlet.textSync("about");
      return new Response(body);
    }
    if(url.pathname == '/contact'){
      const body = figlet.textSync("contact");
      return new Response(body);
    }
    const body = figlet.textSync("Hola!");
    return new Response(body);
  },
})

console.log(`Listening on PORT ${server.port}`)