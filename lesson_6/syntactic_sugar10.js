function stringsObj(first, second, third, fourth, last) {
  return {
    first,
    last,
    middle: [second, third, fourth].sort(),
  }
}

let array = ['apple', 'bananas', 'pineapple', 'cranberry', 'orange'];
let { first, last, middle } = stringsObj(...array);

console.log(first);
console.log(last);
console.log(middle);
