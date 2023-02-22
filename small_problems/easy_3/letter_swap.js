/*
Input = a string
Output = a string with the first and last letters of each word swapped

Algorithm
1. define a function swap with one parameter, string
2. declare a variable wordsArray to the input string split on whitespace ' '
3. declare a variable swappedWordsArray to an empty array []
3. iterate through the wordsArray by index, until the last index is reached
4. declare a variable swappedWord to the character at the last index of the current
string (arr[index][arr[index].length - 1])
5. iterate through the current word at arr[index] by character starting at index 1
6. append each character to swappedWord
7. stop the inner iteration (over the word) when you get to the SECOND TO LAST character
8. append the character at the first index of the current string to swappedWord outside the loop
9. push swappedWord to the swappedWordsArray
10. return the swappedWordsArray joined with spaces into a string
*/

// function swap(string) {
//   let wordsArray = string.split(' ');
//   let swappedWordsArray = [];

//   for (let index = 0; index < wordsArray.length; index += 1) {
//     let swappedWord = (wordsArray[index][wordsArray[index].length - 1]);

//     for (let char = 1; char < wordsArray[index].length - 1; char += 1) {
//       swappedWord += wordsArray[index][char];
//     }

//     if (wordsArray[index].length > 1) {
//       swappedWord += wordsArray[index][0];
//     }

//     swappedWordsArray.push(swappedWord);
//   }

//   return swappedWordsArray.join(' ');
// }

function swap(string) {
  let wordsArray = string.split(' ');
  let swappedWords = wordsArray.map(word => {
    return word[word.length - 1] + word.slice(1, -1) + word[0]
  });

  return swappedWords.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
