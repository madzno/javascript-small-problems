var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction(); // 'This is local'

// This logs 'this is local'. The `myVar` variable declared on line 4 inside the
// `someFunction()` function shadows, or blocks access to the global variable
// 'myVar' on line 1. Thus when we `console.log(myVar)` on line 5, this logs
// the value of the local myVar variable, 'This is local', since
// this is the myVar variable that is accessible at this part of the
// program.
