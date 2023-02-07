/*
Input = an uppercase string
output = a lowercase string

1. Input can have be digits
2. Input can have upper or lowercase letters

Algorithm
1. declare a variable output string to an empty string
2. iterate through the input string by index
3. if the current character is an uppercase character, i.e A-Z, find its ASCII
code using charCodeAt and assign to a variable asciiNumeric
4. assign a variable lowercaseChar to the return value of calling String.fromCharCode
and passing the value of asciiNumeric + 32 to return the lowercase version and append
to the string
5. if the character is not an uppercase letter, just append the character as is to the string
6. return the outputString
*/


const CONVERSION_NUMBER = 32;

function toLowerCase(string) {
  let outputString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index].match(/[A-Z]/)) {
      let asciiNumeric = string.charCodeAt(index)
      let lowerCaseChar = String.fromCharCode(asciiNumeric + CONVERSION_NUMBER);
      outputString += lowerCaseChar
    } else {
      outputString += string[index]
    }
  }

  return outputString;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"
