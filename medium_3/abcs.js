/*
Input = a string
Output = a boolean true / false depending on if the
input string is a valid block word or not

What is a valid block word?
- one that doesn't have the same letter repeated twice
- one that doesn't have both letters from a block

Other rules
- case insensitive
- blocks are provided

Data Structure
 - two array with opposite blocks

Algorithm
- define a constant first blocks with the first letters of the blocks (uppercase)
- define a constant second blocks with the second letters of the blocks (uppercase)
- define a variable inputWord and initialize it to the return value of uppercasing
the input string
- iterate through inputWord by index
- declare a variable current char to the character at that index in inputWord
- declare a variable rest of word to the return value of slicing the rest of the inputWord
from one more than the current index
- declare a variable blockArr to the return value of a ternary expression, if the currentChar
is included in firstBlocks then assign blockArr to 'first' and if not, assign blockArr to 'second'
- declare a variable pairedChar to the return value of a ternary expression, if blockArr is equal to 'first'
assign pairedChar to the character in secondBlock at the indexOf currentChar in firstBlocks, otherwise assign
pairedChar to the character in firstBlocks at the indexOf currentChar in secondBlcks
- if restOfWord includes the currentChar, return false
- if blockArr is equal to 'first' and restOfWord includes the value at charBlockIndex in 'second', return false
- if blockArr is equal to 'second' and restOfWord includes the value at charBlockIndex in 'first', return false
- otherwise return true
*/

function isBlockWord(string) {
  const firstBlocks = ['B', 'G', 'V', 'X', 'R', 'L', 'D', 'F', 'Z', 'C', 'J', 'N', 'H'];
  const secondBlocks = ['O', 'T', 'I', 'K', 'E', 'Y', 'Q', 'S', 'M', 'P', 'W', 'A', 'U'];

  let inputWord = string.toUpperCase();

  for (let index = 0; index < inputWord.length; index += 1) {
    let currentChar = inputWord[index];
    let restOfWord = inputWord.slice(index + 1);
    let blockArr = firstBlocks.includes(currentChar) ? 'first' : 'second';
    let pairedChar = blockArr === 'first' ? secondBlocks[firstBlocks.indexOf(currentChar)] :
      firstBlocks[secondBlocks.indexOf(currentChar)];

    if (restOfWord.includes(currentChar)) {
      return false;
    } else if (restOfWord.includes(pairedChar)) {
      return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false
