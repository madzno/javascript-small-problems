function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

/*
On line 10 we invoke the function `debugIt`. On line 2 inside the `debugIt()` function's body we declare and initialize a variable `status` to the string
`'debugging'`. On line 3 inside the `debugIt()` function body we declare a function logger() which logs the value of `status` to the screen. On line 7
we invoke the `logger` funciton inside debugIt() and this logs 'debugging' to the screen.

The `logger` function has access to the constant `status` because of lexical scoping rules. `logger` is a nested function and has access to any
variables declared in the outer scope of `debugIt`.
*/
