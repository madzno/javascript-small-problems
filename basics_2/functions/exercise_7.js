function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');

// The above will log `'Hello'` and then `undefined`, this is because when our function
// has two parameters but we only pass one argument at invocation, the second parameter (in this case `qux`) is assigned to `undefined`.
