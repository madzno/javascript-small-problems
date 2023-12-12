/*
Input = a string, starting index, ending index
ouptu = a substring

Rules
1. The start index is where we start to return the string
2. if the strt index is negative, treat it as `stringLength` + start
where stringLength is the strenght of the string
  - 'hello world'.length = 11
  - -3 + 11 is 8, so we start at index 8 and for two indexe's 'rl'
3. if length exceeds the number of characters in the string, just return the rest of
the string
4. if length is negative, return an empty string ''

Algorithm
1. define a funcion substr that takes a string, starting index, and ending index
2. declare a variable index to the value of start if it is positve, if it is negative
to the value of start + string.length
3. declare a variable substring to an empty string
4. declare a variable counter to the value of length
5. initialize a loop that runs while length is greater than zero AND the index value is
less than the string length
- inside the loop concatenate the character at the current index to substring
- add 1 to index
- subtract 1 from length
6. return the substring
*/

function substr(string, start, length) {
  let index;
  if (start >= 0) {
    index = start;
  } else {
    index = start + string.length;
  }
  let substring = '';
  let counter = length;

  while (counter > 0 && index < string.length) {
    substring += string[index];
    index += 1
    counter -= 1
  }

  return substring;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
console.log(substr(string, 2, 5)) // 'llo w'
