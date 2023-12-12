let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// this code logs 'bar' to the console.
// the variable 'foo' declared on line 3 shadows the variable
// 'foo' on line 1 but is not available outside the block, therefore
// console.log only has access to the variable foo declared on line 1
// which has a value of `'bar'`.
