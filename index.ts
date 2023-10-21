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
    if(url.pathname == '/feed'){
      const body = figlet.textSync("Feed");
      throw new Error(body);
    }
    if(url.pathname == '/greet'){
      return new Response(Bun.file("./greet.txt"))
    }
    return new Response('404!');
  },
  error(error){
    return new Response(`<pre> ${error} \n ${error.stack} </pre>`, {
      headers:{
        'Content-type':'text/html'
      }
    })
  }
})

console.log(`Listening on PORT ${server.port}`)