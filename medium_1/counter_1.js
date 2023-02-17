var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}

/*
This logs 'The total value is 15' to the screen.

The `counter` function declaration gets hoisted to the top, followed by `var counter;` and `var rate;`

The variable assignments counter = 5 and rate = 3 do not get hoisted. Thus, counter gets re-assigned to the integer 5 while rate is initialized to 3.

Thus counter * rate = 15 and line 3 logs 'The total value is 15'
*/
