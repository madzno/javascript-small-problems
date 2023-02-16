/*
Input = a string
Output = an object with counts of repeated characters

Rules
1. case does not matter
2. if there is only one instance of a letter don't return
it in the returned object
3. the object keys are lowercase letters and values are the count
of that letter

Algorithm
1. Define a function repeatedCharacters with a parameter string
2. declare a variable lowerCasedString and initialize it to the return value
of toLowerCase() on the input string
3. declare a variable countsObj to an empty object
4. iterate through the lowerCasedString by index,
  4a. if the current letter is a key in the countsObj object, add 1 to that key's value
  4b. if the current letter is not a key in the countsObj object, add it as a property with
  an initial value of 1
5. initialize an empty objected repeatedCharsObj
6. iterate through the countsObj object using a for..in loop
7. if the current value is greater than 1, add the property and value to repeatedCharsObj
8. return repeatedCharsObj
*/

function getCounts(string) {
  let counts = {};

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];

    if (counts[char]) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
    }
  }

  return counts;
}

function repeatedCharacters(string) {
  let lowerCasedString = string.toLowerCase();
  let countsObj = getCounts(lowerCasedString);

  let repeatedCharsObj = {};

  for (let char in countsObj) {
    if (countsObj[char] > 1) {
      repeatedCharsObj[char] = countsObj[char];
    }
  }

  return repeatedCharsObj;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
