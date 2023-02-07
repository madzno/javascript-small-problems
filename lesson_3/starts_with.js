/*

Input = two strings
Output = a boolean true or false

Rules
1. output true if the first string starts with the second string
- what does it mean for the string to start with the second string?
  - If the first string and the second string have the same exact characters
  up until the end of the second string's length

Algorithm
1. define a function startsWith that takes two arguments string and searchString
2. iterate through the searchString by index
3. iterate through the string by index
4. if the current character of strig and searchString is the same for the entirety
of the searchString's length, then return true, if at any point the characters
are not equal return false


*/

function startsWith(string, searchString) {

  for (let index = 0; index < searchString.length; index += 1) {
    if (string[index] !== searchString[index]) return false;
  }

  return true;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false
