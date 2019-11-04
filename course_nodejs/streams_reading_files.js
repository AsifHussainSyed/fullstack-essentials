var fs = require('fs');
var readableStream = fs.createReadStream('./Node-stream-handson/data_file.txt');

readableStream.setEncoding("UTF8");

readableStream.on('data', (chunk) => {
  console.log(chunk.length);
});