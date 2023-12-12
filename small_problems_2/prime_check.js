/*
Input = a number
Output = a boolean

Rule
1. number will be a non negative integer
2. return true if the number is prime
a prime number is a number that can only be divided by
itself and 1
3. return false if the number is not prime

Algorithm
1. define a function isPrime with one argument num
2. if the number is 0 or 1 it is not prime (return false)
3. initilaize a for loop , initilaize currentNum to 2
3. initilaize for loop condition - to while the number is less than the
input number
4. increment current num by 1
4. if at any point the remainder of dividing the input num by the currentNum
is 0, then the number is not prime and return false
5. if we loop throgh all the numbers from 2 until the input number and nothing
is divisible, return true

*/

function isPrime(number) {
  if (number === 0 || number === 1) return false;
  for (let currentNum = 2; currentNum < number; currentNum += 1) {
    if (number % currentNum === 0) return false;
  }
  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false
