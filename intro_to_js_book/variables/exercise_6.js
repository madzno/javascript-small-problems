const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// this program doesnt raise and error and logs 'bar' on line 6
// because the constant FOO intialized inside the block on line 3
// shadows the constant on line 1, thus the two constants are different
// entities and this does not raise an error.
