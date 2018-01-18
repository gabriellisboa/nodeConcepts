var person = {
  firstName: 'João',
  lastName: 'Maria',
  greet: function() {
    console.log('Oies, eu sou o ' + this.firstName + ' ' + this.lastName + '!');
  },
}

person.greet();

//Another way to access objects properties
console.log(person['firstName']);

//Function constructors

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

//Using object prototype to add new method
Person.prototype.greet = function() {
  console.log('Boa tarde, me chamo ' + this.firstName + ' ' + this.lastName + '!');
}

var joao = new Person('João', 'Maria');

joao.greet();