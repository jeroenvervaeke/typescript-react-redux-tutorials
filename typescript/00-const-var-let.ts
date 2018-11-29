// Const example
const variables_const = 'This is a const';
variables_const = 'This is a const';

























// Let vs var
// Quiz

// Redeclaring variables
var variables_var = 'foo';
var variables_var = 'bar';

let variables_let = 'foo';
let variables_let = 'bar';

// Variable scopes
for (var var_i = 0; var_i < 5; ++var_i) {
  //Do stuff with var_i
}
console.log(var_i);

for (let let_i = 0; let_i < 5; ++let_i) {
  // Do stuff with let_i
}
console.log(let_i);
