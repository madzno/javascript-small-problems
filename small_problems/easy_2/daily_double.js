/*
Input = string
output = new string

Rules
1. new strings should have consecutive duplicate characters
collapsed into a single character

Algorithm
1. define a function crunch that takes a string as an argument
2. initilaize a variable resultString to an empty string
3. iterate through the input string if the character at index + 1 or
isn't the same as the current character the current index is the last index (i.e string.length - 1), append the current character
to resultString
4. return resultString
*/

function crunch(string) {
  let resultString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== string[index + 1] || index === string.length - 1) {
      resultString += string[index];
    }
  }

  return resultString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
