/*
Input = an integer
Output = a string

Rules
1. the length of the output string should match the given integer
2. the output string always starts with '1' and contains alternating '1's
and '0's

Algorithm
1. define a function stringy with a parameter num
2. declare a variable outputString to an empty string
3. initialize a for loop and initialize a counter variable to 1, continue
iterating until you are greater than or equal to the input numb, add 1
to the counter
4. if the current counter is odd, add a '1' to the outputString, if the counter
is even add a '0' to the outputString
5. return the outputString
*/

function stringy(num) {
  let outputString = ''

  for (let counter = 1; counter <= num; counter += 1) {
    if (counter % 2 === 1) {
      outputString += '1'
    } else {
      outputString += '0'
    }
  }

  return outputString;
}


console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
