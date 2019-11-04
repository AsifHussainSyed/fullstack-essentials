var fs = require('fs');

var strToWrite = 'Node.js is an ultimate backend javascript for backend development';
var writeableStream = fs.createWriteStream('Big_data.txt');

for(var i = 0; i < 100000; i++){
  writeableStream.write(strToWrite, 'UTF8');
}
                  