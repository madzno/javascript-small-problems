/*
Input = a string and an integer
Output = a string repeated the number of times as indicated
by the integer

Rules
1. if times is not a number, returned undefined
2. if times is 0, return an empty string
3. If times is a negative number, return undefined

Algorithm
1. define a method repeat that takes two arguments - a string and a number
(times)
2. Guard clause - if times is not type of Number, OR a negative number return undefined
3. declare a variable output string to an empty string
4. initialize a while loop, while times is greater than 0, concatenate
string to the empty string and subtract 1 from times
5. return output string


*/


function repeat(string, times) {
  if (typeof times !== 'number' || times < 0) {
    return undefined;
  }

  let outputString = '';

  while (times > 0) {
    outputString += string;
    times -= 1;
  }

  return outputString;
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined
