var https = require('https');
var fs = require('fs');

var writeableStream = fs.createWriteStream('Nodejs.html');

const options = {
  hostname: "en.wikipedia.org",
  port: 443,
  path: "/wiki/Nodejs",
  method: "GET"
};

const req = https.request(options, (response) => {
  console.log('statusCode', response.statsCode);
  console.log('headers', response.headers);
  
  response.on('data', (data) => {
    writeableStream.write(data);
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.end();

                  