// var http = require('http');

// http.createServer((request, response) => {
//   response.writeHead(200, {"Content-type": "text/plain"});
//   response.write("Hello World");
// }).listen(8000);

var http = require('http');
function startServer(){
  function onRequest(request, response){
    console.log("request received");
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Hello World");
    response.end();
  }
  
  http.createServer(onRequest).listen(8000);
  console.log("Server started listening on port 8000");
}

exports.startServer = startServer;
