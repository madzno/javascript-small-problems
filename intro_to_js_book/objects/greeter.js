function greeter(greeting) {
  return function (name) {
    return console.log(`${greeting} ${name}`);
  }
}

let hello = greeter('Hello');
let hi = greeter('Hi');

console.log(hello('Maddy'));
