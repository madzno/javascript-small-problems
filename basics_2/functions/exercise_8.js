function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);

// the above will output 42 and 3.1415. The foo function is defined with two parameters bar and qux
// and we pass three arguments at function invocation on line 6. Thus the first two arguments 42 and
// 3.1415 are output and the third argument is ignored.
