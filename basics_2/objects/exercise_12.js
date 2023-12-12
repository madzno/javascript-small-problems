function foo(str) {
  console.log(str, str, str);
}

let bar = foo;

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"
