console.log(a);

var a = 1;

/*
The above code logs undefined to the console. Due to hoisting, the variable declaration
var a; gets hoisted to the top of its scope. The assignment of a to 1, however, is not
hoisted. Thus a references undefined when console.log is called and undefined is output to the
console. Afterwards, a is assigned to 1.
*/
