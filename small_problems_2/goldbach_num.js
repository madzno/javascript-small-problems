/*
Goldbach's conjecture = every even natural number greater
than 2 is the sume of two prime numbers

Input = an integer
Output = two integers, prime numbers whose sum is equal to
th input integer

Rules
1. if the number is odd or less than 4, return null
2. every even integer greater then 2 can be a sum of two prime numbers

Algorithm
1. define a function checkGoldbach that takes an integer, expextedSum as an argument
2. if expectedSum is less than 4 or odd, return null
3. Initialize a loop that has a counter, firstNum that begins at 2, iterates while firstNum
is less than expectedSum and increments by 1
4. Initialize a variable secondNum that is initilaized to the return value of expectedSum - firstNum
5. If firstNum and secondNum are prime, console.log(firstNum, secondNum)
6. If secondNum is > firstNum, break out of the loop
*/

function isPrime(number) {
  if (number === 0 || number === 1) return false;
  for (let currentNum = 2; currentNum < number; currentNum += 1) {
    if (number % currentNum === 0) return false;
  }
  return true;
}


function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  };

  for (let firstNum = 1; firstNum < expectedSum; firstNum += 1) {
    let secondNum = expectedSum - firstNum;

    if (firstNum > secondNum) break;

    if (isPrime(firstNum) && isPrime(secondNum)) {
      console.log(firstNum, secondNum);
    }
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(11);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
