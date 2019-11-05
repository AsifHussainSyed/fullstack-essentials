** App **

var readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("enter num1: ", (num1) => {
      rl.question("enter num2: ", (num2) => {
        var result = (+num1) + (+num2);
        console.log("The sum is " + result);
        rl.close();
      });
    });
                  

**modules**

var readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("enter num1: ", (num1) => {
      rl.question("enter num2: ", (num2) => {
        var result = (+num1) * (+num2);
        console.log("The product is " + result);
        rl.close();
      });
    });
                  
