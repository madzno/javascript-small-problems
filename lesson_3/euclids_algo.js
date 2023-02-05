/*
Calculate greatest divisor using euclids algoirthm
1. initilaize a while loop and set the condition to true
2. On each iteration of the while loop,
3. If num1 is greater than num2, subtract num2 from num1 (num1 - num2), and re-assign
   the results to num1. If num1 and num 2 are now equal, return num1.
4. If num2 is greater than num1, subtract num1 from num2 (num 2 - num1), and re-assign
   the results to num 2. If num1 and num2 are now equal, return num2
*/

function gcd(num1, num2) {
  while (true) {
    if (num1 > num2) {
      num1 = num1 - num2;
    } else if (num2 > num1) {
      num2 = num2 - num1
    } else if (num1 === num2)
      return num1;
  }
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1
