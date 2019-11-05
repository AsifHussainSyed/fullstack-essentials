app.js

var server = require('./server');
var router = require('./routers');
var handlers = require('./handlers');

var handle = {};
handle['/home'] = handlers.home;
handle['/newpage'] = handlers.newpage;
handle['/review'] = handlers.review;

server.startServer(router.route, handle);
           



server.js

var http = require('http');
var url = require('url');
var route = require('./routers')

function startServer(route, handle){
  function onRequest(request, response){
    var formdata = "";
    var pathname = url.parse(request.url).pathname;
    console.log("request received for " + pathname);
    request.setEncoding('utf8');
    
    request.addListener("data", (chunk) => {
      formdata += chunk;
    });
    
    request.addListener('end', () => {
      route(handle, pathname,response, formdata);
    })
    response.end();
  }
  
  http.createServer(onRequest).listen(8080);
  console.log("Server started listening on port 8080");
}

exports.startServer = startServer;





routers.js

function route(handle, pathname, response, formdata){
  console.log("Routing a request for " + pathname);
  if(typeof handle[pathname] === 'function'){
    handle[pathname](response, formdata);
  }else{
    console.log("No handler for " + pathnane);
    response.writeHead(404, {"Content-type": "text/plain"});
    response.write("Error 404 page not found");
    response.end();
  }
}

exports.route = route;





handlers.js

var querystring = require('querystring');

function home(response){
  console.log("Executing 'home' handler");
  var htmlfile = `<html>
    <head>
      <meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
    </head>
    <body>
      <form action="/newpage" method="post">
        <input type="text" name="fname/>
        <input type="text" name="lname/>
        <input type="submit" value="Submit"/>
      </form>
    </body>
  </html>`;
  response.writeHead(200, {"Content-type": "text/html"});
  response.write(htmlfile);
  response.end();
}

function newpage(response, formdata){
  console.log("Executing 'newpage' handler");
  response.writeHead(200, {"Content-type":"text/plain"});
  response.write(querystring.parse(formdata).text + " is the creator of Node.js");
  response.end();
}

function review(){
  console.log("Executing 'review' handler");
}

exports.home = home;
exports.newpage = newpage;
exports.review = review;