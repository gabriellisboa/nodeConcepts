//function statement 
function greet() {
  console.log('hi');
}
greet();

//functions are first-class
function logGreeting(fn) {
  fn();
}

logGreeting(greet);

//function expression
var greetMe = function() {
  console.log('FUNCTION EXPRESSION');
}

greetMe();

logGreeting(greetMe);

// use a function expression on the fly

logGreeting(function() {
  console.log('Hello');
});