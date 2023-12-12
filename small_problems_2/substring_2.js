/*
Input = a string and two integers that represent indices of the provided string
Output = a substring

Rules
1. If both provided integers are positive integers and within boundaries of the
string, and start is less than end, return string from start (inclusive) to
end (non inclusive)
'hello world', 2, 4
'll' = string from index 2 - index 4 NOT including index 4

2. If start is greater than end, swap the two values and return the same way
as above
'hello world', 4, 2
'll' = string from index 2 - index 4 NOT including index 4

3. If start is equal to end, return an empty string

4. if end is omitted, the end variable is undefined, return the string at position
start up to and including the end of the string
'hello world', 2
'llo world' = string returned from index 2 until the end of the string

5. if either start or end is less than 0 or NaN treat it as 0
'hello world', 0, -1
-1 is treated as zero 'hello world, 0, 0
- if start is equal to end return an empty string - ''

'hello world', 'a',
- 'a' is treated as zero 'hello world', 0
- if no end, return the string from start index until the end
'hello world'

6. if either start or end is greater than the length of the string, treat it as equal
to the string length
'hello world', 8, 20
- treat 20 as the string length, 10
- string from index 8 to the end of the string reurned 'rld'

Algorithm
1. Define a method substring that takes three arguments string, start, end
2. initialize an empty string called substring
3. Guard clause - if start or end is equal to a negative number or NaN (after conversion),
re assign them to 0
4. Guard clause - if after this conversion start and end are equal, return an empty string
5. Guard clause - if either start or end is greater than the length of the string, re-assign
that number to the value of string.length
6. Declare a variable startingIndex and assign it to start if start < end or to end if
end < start
7. Declare a variable endingIndex and assign it to end if end > start or to start if
start > end
8. Initialize a while loop that loops while startingIndex is less than endingIndex
9. append the current value of string[startingINdex] to substring
10. increment startingIndex by 1
11. return substring

*/

function substring(string, start, end) {
  if (start < 0 || Number.isNaN(Number(start))) {
    start = 0;
  } else if ((end !== undefined) && (end < 0 || Number.isNaN(Number(end)))) {
    end = 0;
  } else if (end > string.length) {
    end = string.length;
  }

  if (start === end) return '';

  let startingIndex;
  let endingIndex;
  if (end === undefined) {
    startingIndex = start;
    endingIndex = string.length;
  }
  else if (start < end) {
    startingIndex = start;
    endingIndex = end;
  } else if (end < start) {
    startingIndex = end;
    endingIndex = start;
  }

  let substring = '';

  while (startingIndex < endingIndex) {
    substring += string[startingIndex]
    startingIndex += 1
  }

  return substring;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
