/*
Input = two positive integers
Ouptut = an integer representing the greates common divisor of two
positive integers

1. Determine which of the two integers is less than the other, declare
a variable smallerInt and assign to the return value of a ternary operator,
if num1 is < num2, assign it num 1 otherwise assign it num 2
2. declarea and initialize a variable greatestDivisor to 1
3. write a for loop, initialize the current number to 2 , run the loop
as long as the current number is less than or equal to the smallestINt, increment
the current num by 1
4. if both num1 and num2 are evenly divisible by the currentNum, re-assign
greatestDivisor to that currentNum
5. return the greatestDivisor
*/

function gcd(num1, num2) {
  let smallerInt = num1 < num2 ? num1 : num2;
  let greatestDivisor = 1;

  for (let currentDivisor = 2; currentDivisor <= smallerInt;
    currentDivisor += 1) {
    if (num1 % currentDivisor === 0 && num2 % currentDivisor === 0) {
      greatestDivisor = currentDivisor;
    }
  }

  return greatestDivisor;
}


console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1

