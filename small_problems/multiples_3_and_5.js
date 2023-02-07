/*
Input = a number
Output = a number

Rules
1. the returned number is the sum of all multiples of 3 or 5
between 1 and that number inclusive
2. multiples means evenly divisble by 3 or 5
*/

function multisum(num) {
  let sum = 0;

  for (let currentNum = 1; currentNum <= num; currentNum += 1) {
    if (currentNum % 3 === 0 || currentNum % 5 === 0) {
      sum += currentNum
    }
  }

  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
