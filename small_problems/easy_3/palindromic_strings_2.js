/*
Input = a string
Ouptut = true or false

Rules
1. case insensitive (doesn't matter if the element is upcase or lowercase)
2. only alphanumeric's matter

'Madam, I'm Adam'
'MadamI'mAdam'
'madamimadam'

Algorithm
1. define a function isRealPalindrome with one parameter, a string
2. declare a variable lowercaseAlphaString to the return value of calling toLowerCase on the input string
and then calling replaceAll and matching any non alphanumeric characters [^a-z0-9]
3. return the return value of calling isPalindrome with
lowercaseAlphaString as an argument
*/

function isPalindrome(string) {
  let reversedString = string.split('').reverse().join('');
  return string === reversedString;
}

function isRealPalindrome(string) {
  let cleanUpRegex = /[^a-z0-9]/g;
  let lowerCaseAlphaString = string.toLowerCase().replace(cleanUpRegex, '');
  return isPalindrome(lowerCaseAlphaString);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
