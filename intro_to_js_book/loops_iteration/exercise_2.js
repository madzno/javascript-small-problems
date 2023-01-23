/*
Algorithm
- baseline condition - if result is less than or equal to 1 return the result
- set the
*/


function factorial(num) {
  let result = num;

  for (currentnum = num - 1; currentnum >= 1; currentnum -= 1) {
    result *= currentnum
  }

  return result;
}


console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
