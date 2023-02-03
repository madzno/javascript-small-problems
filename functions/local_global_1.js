var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// logs 'This is global'. the `myVar` declared on line 1 and the `myVar` declared
// on line 4 are two different variables. The variable declared on line 1 is in
// the global scope while the variable declared on line 4 is in a scope local to the
// `someFunction` function. Furthermore, since they have the same name, the local
// `myVar` variable on line 4 shadows, or blocks access to, the `myVar` global
// variable.
