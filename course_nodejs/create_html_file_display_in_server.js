var fs = require('fs');
var http = require('http');
var fileContent = `<!DOCTYPE html> <html> <body>

<h2>Welcome ! what would you like to have</h2>

<ul> <li>Coffee</li> <li>Tea</li> <li>Milk</li> </ul> <body> <html>`;

const createFile = (content) => {
  fs.writeFile('./Sample.html', content, (error) => {
    if(error){
      console.log("an error occurred");
    }
  });
}

createFile(fileContent);

http.createServer((request, response) => {
  fs.readFile("./Sample.html", (err, data) => {
    if(error){
      response.writeHead(404);
      response.write("Content not found :(");
    }else{
      response.writeHead(200, {"Content-type": "text/html"});
      response.write(data);
    }
    response.end();
  });
}).listen(3000);
                  