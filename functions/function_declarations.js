logValue();

function logValue() {
  console.log('Hello, world!');
}

/*
Above logs 'Hello world!' to the screen. Due to hoisting, the entire `logValue()` function declaration
gets hoisted to the top of its scope, in this case the global scope. Thus, since Javascript
is aware of its existance, we are able to call it which logs `'Hello world!' to the
screen.
*/


