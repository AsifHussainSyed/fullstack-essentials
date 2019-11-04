var fs = require('fs');
var dir = "./Node_folder";
var content = "This is Node.js a powerful backend javascript used very widely in industry for developing web applications.";

const createDir = (path) => {
  if(!fs.existsSync(path)){
    fs.mkdirSync(path);
  }
}

const createFile = (path, content) => {
  fs.writeFile(path + '/sample.txt', content, (error) => {
    if(error){
      console.log("an error occurred");
    }
  });
}

createDir(dir);
createFile(dir, content);