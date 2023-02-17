function counter(count) {
  // ...
}

console.log(counter);
console.log(rate);
console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;

/*
The variable declarations `var counter;` and `var rate;` get hoisted to the top of the scope after the counter function declaration.

The assignments of counter to 5 and rate to 3, however, do not get hoisted.

Thus on line 5 when we call console.log, counter is initialized to a function and rate is given an initial value of undefined, thus this
logs 'The total value is NaN' since counter() * undefined is NaN
*/
