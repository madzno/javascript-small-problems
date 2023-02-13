function lastNOf(arr, count) {
  if (count < arr.length) {
    return arr.slice(arr.length - count);
  } else {
    return arr.slice();
  }
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3));    // returns [16, 23, 42]
console.log(lastNOf(digits, 4));
console.log(lastNOf(digits, 8));
