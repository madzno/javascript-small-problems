/*
Input = a string
Output = an object with keys that represent the length of a word
and values that represent the number of words in the input string with that length

Rules
1. a word is a sequence of any non-space characters

Algorithm
1. define a function wordSizes with a parameter, string
2. declare a variable sizesObj and initialze it to an empty object literal
3. declare a variable wordsArr and initialize it to the return value of splitting string on whitespace
4. iterate through wordsArr by index
5. if sizesObj has a key that is the String version of the current word (wordsArr[index])'s length,
then add 1 to the value of that key
6. if sizeObj does not have a key, add one with 1 as the value
7. return the sizesObj
*/

function wordSizes(string) {
  if (string.length === 0) return {};

  let wordsArr = string.split(' ');
  let sizesObj = {};

  for (let index = 0; index < wordsArr.length; index += 1) {
    let lengthKey = wordsArr[index].length;

    if (sizesObj[lengthKey]) {
      sizesObj[lengthKey] += 1;
    } else {
      sizesObj[lengthKey] = 1;
    }
  }

  return sizesObj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
