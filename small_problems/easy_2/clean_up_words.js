/*
Input = a string
Output = a string with only alphanumeric characters

Rules
1. replace any alphanumeric characters with a space
2. don't leave more than one space in a row

Algorithm
1. define a function cleanUp that takes a string as an argument
2. Call replace on the string and convert any non alphabetic characters to a space,
assign the return value to a variable cleanedUpString
4. declare a variable output string and assign it to an empty string
5. iterate through the cleanedUpString by index
  - if the current character is not a space concatenate it to output string
  - if the current character is a space AND the character in front of it is NOT a space, concatenate it to the output string
  - if the current character is a space and the character in front of it is a space, do not concatenate it to the output string
*/

function cleanUp(string) {
  let cleanedUpString = string.replace(/[^A-Za-z]/g, ' ');
  let outputString = ''

  for (let index = 0; index < cleanedUpString.length; index += 1) {
    if (cleanedUpString[index] !== ' ') {
      outputString += cleanedUpString[index];
    } else if (cleanedUpString[index] === ' ' && cleanedUpString[index + 1] !== ' ') {
      outputString += cleanedUpString[index];
    }
  }

  return outputString;
}

console.log(cleanUp("---what's my +*& line?") === " what s my line ")
