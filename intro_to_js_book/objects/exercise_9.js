let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi'; // mutating 'foo' by assining its 'a' property a new value 'hi'
  argument2 = 'hi'; // reassigning qux to hi but reassignment isn't mutating
}

bar(foo, qux); // calling bar function with object foo as first argument and string hello as second argument

console.log(foo.a); // hi
console.log(qux); // hello
