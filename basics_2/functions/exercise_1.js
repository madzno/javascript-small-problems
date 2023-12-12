// let bar = 1;
// function foo() {
//   let bar = 2;
// }

// foo();
// console.log(bar);


// This code outputs 1 to the console. On line 1 we declare a variable bar and initialize it to the value 1
// On line 6 we invoke the foo function. This invocation has no effect on the value assigned to bar on line 1
// because Javascript functions create an inner scope. THus, the bar variable declared on line 3 inside the
// foo function is not the same as the one on line 1. On line 7 we invoke the console.log method and pass
// the value of the bar variable as an argument. Since invoking the foo funciton had no effect on the value of
// the bar variable invoked on line 1, 1 is output to the console.

let bar = 1;
function foo() {
  bar = 2
}

foo();
console.log(bar)

// In this case, we are reassigning a global variable `bar` inside the `foo` funciton. Global variables
// are available anywhere within our program. Thus, when we invoke the foo() funciton on line 6, the bar
// varaible is reassigned to 2 and on line 7 our program outputs 7 to the console.
