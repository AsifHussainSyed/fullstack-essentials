var fs = require('fs');

var readableStream = fs.createReadStream('./Node-stream-handson/data_file.txt');
var writeableStream = fs.createWriteStream('./new_data_file.txt');

readableStream.pipe(writeableStream);
                  