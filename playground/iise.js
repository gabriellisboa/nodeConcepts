var firstName = 'Joao';

// Wrapping inside () makes it a expression
// and adding after the function() makes it invoke right away
// WORKAROUND FOR MODULES BEFORE IT WAS AVAILABLE (SCOPE PROTECTION)
(function(lastName) {
  var firstName = 'Gabriel';
  console.log(firstName);
  console.log(lastName);
}('Alejo'));

console.log(firstName);