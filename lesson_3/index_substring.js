/*
Input = two strings, the second string meant to be a substring of the first
Output = an integer that returns the character where that substring begins

Rules
1. you can use [] to access a character by index and the length
property to find the string length however cannot use any other properties from
JavaScript's string class

Algorithm
1.define a function indexOf that takes two strings, firstString and secondString
2. iterate through the firstString starting at an index 0 and incrementing that index
by 1, stop iterating when the end of the string is reached (i.e when index is greater
than the string length)
3. initilaize a variable matchCount to -
4. iterate through the secondString starting at index 0 and incrementing that index
by 1
5. if there is a match at the current index of first string plus the current index
of second string to the current index of secnod string add 1 to matchcount and
keep iterating though the second string, if not break out of the loop
*/

function indexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;

  for (let indexFirst = 0; indexFirst <= limit; indexFirst += 1) {
    let matchCount = 0;

    for (let indexSecond = 0; indexSecond < secondString.length; indexSecond += 1) {
      if (firstString[indexFirst + indexSecond] === secondString[indexSecond]) {
        matchCount += 1;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return indexFirst;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;

  for (let indexFirst = limit; indexFirst >= 0; indexFirst -= 1) {
    let matchCount = 0;

    for (let indexSecond = 0; indexSecond < secondString.length; indexSecond += 1) {
      if (firstString[indexFirst + indexSecond] === secondString[indexSecond]) {
        matchCount += 1;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return indexFirst;
    }
  }

  return -1;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1
