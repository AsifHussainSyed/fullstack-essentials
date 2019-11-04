var events = require('events');

var eventEmitter = new events.EventEmitter();

var greeting = () => {
  console.log("HI THERE ! HAPPY LEARNING");
}

eventEmitter.on('MyEvent', greeting);
eventEmitter.emit('MyEvent');