function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

// primitive values 'a', 1, 'b', 2, 'c', 'd', 'Hi', 'Grace', ' ', 3, 4, 5
// objects hello(), xyzzy(), {}, [3, 4, 5], {a: 1, b: 2, c: [3, 4, 5], d: {}}
// property names a, b, c, d
// variables greeting, name, howdy, foo, hello, xyzzy
