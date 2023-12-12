let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let array = Object.keys(obj).map(letter => letter.toUpperCase());

console.log(array);
console.log(obj);
