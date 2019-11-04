app.js


var server = require('./server');
var router = require('./router');
server.startServer(router.route);

server.js


var http = require('http');
var url = require('url');
var route = require('./router')

function startServer(route){
  function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log("request received for " + pathname);
    route(pathname);
    if(pathname ==='/'){
      response.writeHead(200, {"Content-type": "text/plain"});
      response.write("Welcome Home");
      // response.end();
    }
    else if(pathname === '/tcs'){
      response.writeHead(200, {"Content-type": "text/plain"});
      response.write("HI TCSer ");
      // response.end();
    }else{
      response.writeHead(404);
      response.write("port number:8080");
      response.write("404 File not found Error");
      // response.end();
    }
    response.end();
  }
  
  http.createServer(onRequest).listen(8080);
  console.log("Server started listening on port 8080");
}

exports.startServer = startServer;

router.js

function route(pathname){
  console.log("Routing a request for " + pathname);
}

exports.route = route;