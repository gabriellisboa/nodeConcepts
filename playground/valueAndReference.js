//By value: Make a copy of the variable on another memory address
function change(b) {
  b = 2;
}

var a = 1;
change(a);
console.log(a);

//By reference: When pasing an object it creates another reference to the 
//same memory address, so it mutates the object from the upper scope
function changeObj(d) {
  d.prop1 = function() {};
  d.prop2 = {};
}

var c = {};
c.prop1 = 'cu';
changeObj(c);
console.log(c);