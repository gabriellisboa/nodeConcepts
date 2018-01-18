var EventConfig = require('./config');

// My Emitter:
var Emitter = require('./emitter');
// Node Emitter;
var Emitter = require('events');

var emtr = new Emitter();

emtr.on(EventConfig.GREET, function() {
  console.log('Oies');
});

emtr.on(EventConfig.GREET, function() {
  console.log('Oies de novo!');
});

console.log('Hello');
emtr.emit(EventConfig.GREET);