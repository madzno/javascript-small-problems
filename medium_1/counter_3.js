var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

/*
The counter function declaration gets hoisted to the top of the scope. The variable declarations `var counter` and `var rate` also get hoisted, but after
the counter function declaration.

Assignment of counter to 5 and rate to 3 do not get hoisted

The call to console.log occurs after counter gets re-assigned to 5 and rate gets initialized to 3, so this outputs 'The total value is 15'
*/
