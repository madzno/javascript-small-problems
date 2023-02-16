const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj); // { 'funcProp': 'hello' }
myObj[myFunc()] = 'world!';
console.log(myObj); // {'funcProp': 'world!'}

/*
On line 1 we declare a constant `myObj` to an empty object literal `{}`.

On line 2 we use bracket notation to add a new property to `myObj`. When we use an expression as the operand with
bracket notation, that expression's value is used. In this case `myFunc()` is a function invocation which evaluates
to the string 'funcProp'`. Thus a property with the name `'funcProp'` and the value `'hello, '` is added to the
`myObj` object.

on line 8 we log the current value of `myObj` and this logs `{funcProp: 'hello, '}` to the screen.

On line 9 we use bracket notation to re-assign the value of `'funcProp'`, again using an expression `myFunc()` which
evlautaes to the string 'funcProp', to the string `'world!'`. Thus when we log the value of `myObj` after this
re-assignment the new value of the `funcProp` property is reflected and `{funcProp: 'world!' } is logged to the
screen.

*/
