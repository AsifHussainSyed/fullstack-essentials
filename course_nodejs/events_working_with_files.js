var fs = require('fs');

var filePath = './Node-read-handson/To_Read.txt.txt';

fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
});
