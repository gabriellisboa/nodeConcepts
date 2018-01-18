var greet = require('./greet');
var jsonGreet = require('./greetings.json');

greet.english();
greet.spanish();

console.log(jsonGreet.en);
console.log(jsonGreet.es);
console.log(jsonGreet.br);
