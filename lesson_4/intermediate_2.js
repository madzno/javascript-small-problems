function forwardAndReverse(arr) {
  let forwardArray = arr.slice();
  let reverseArray = arr.slice().reverse();

  return forwardArray.concat(reverseArray);

}

let digits = [4, 8, 15, 16, 23, 42];

console.log(forwardAndReverse(digits));

console.log(digits);
