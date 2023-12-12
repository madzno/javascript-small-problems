/*
Input
- A plaintext string to be encrypted and a keyword string
- Will we ever recieve a different data type?
- Will we recieve less than two arguments or more than one argument?
- Will the keyword or the plaintext ever be empty strings? What should we
do in these cases


Examples/Test Cases
vigenereCipher('Pineapples don't go on pizzas!', 'meat');
'Pine appl esdo ntgo onpi zzas' - remove any non alphabetic characters and
                                  split the string into character groups based on the
                                  length of the keyword
'meat'
- m corresponds to 13
- e corresponds to 4
- a corresponds to 0
- t corresonds to 19

'Pine'
P gets moved 13 places - P's index is 15 + 13 = 28 , 28 - 27 = 1, 'B'
i gets moved 4 places - i's index is 8 + 4 = 12, 'm'
n gets moved 0 places - 'n'
e gets moved 19 places - e's index is 4 + 19 = 23, x


Output rules
 - remove any non alphabetic letters from the input string
 - split the alphabetic letters into strings that correspond to the length of the
 keyword
 - find the index location of the keyword's letters in the corresponding alphabet
 list
 - add each of those index's to the plaintext letter's index,
   - if the result is greater than 25, subtract 27 from the result to get the "wrap around"
   value
- keep  the case of the plaintext letter, i.e if the plaintext letter is 'P', find
the uppercase encrypted letter
- keep the punctuation and non alphabetic characters as is in the input string

Questions
 - Will the keyword ever be the same length or greater than the length of the plaintext string?
  - need test case where the keyword is the same length as the input string
  - need test case where the keyword is greter than the length as the input string
- Current test case tests letters other than alphabet as well as uppercase for plaintext string
- need test case where kewyword is uppercase
- Keyword will never have non alphabetic characters?
- What if keyword doesn't divide evenly into the input string alphabetic characters,
do we just use it up until a point? - need test case for this


Data structure
 - arrays to keep index "Shift values" for the upper and lowercase alphabet


Alogithm
 - define a function vigenereCipher with two parameters plaintext and keyword

 - declare a constant lowercase to the lowercase alphabet letters split into an array
 - declare a constant uppercase to the uppercase alphabet letters split into an array

 - find the index locations (shift values) for each of the letters in the keyword
 - declare a variable shiftValues to an empty array
 - iterate through the keyword string,
  - if the current letter is an uppercase letter,
     - declare a variable indexOfLetter to the return value of calling indexOf on the uppercase
     alphabetic letters array and passing the current letter as an argument
     - append indexOfLetter to the shiftValues array
  - if the current letter is a lowercase letter,
    - declare a variable indexOfLetter to the return value of calling inexOf on the lowercase
    alphabetic letters array and passing the current letter as an argument
    - append indexOfLetter to the shiftValues array

  - shiftValues array now contains all of the index values of the kewyword's letters in order
  - declare a variable shiftValuesIndex and initialize it to 0
  - declare a variable encryptedString and initialize it to an empty string

  - iterate through the plaintext string by index
   - declare a variable currentChar to the char at the current index in plaintext
   - if currentChar is not an alphabetic letter, simply append it to the encryptedString

   - if currentChar is an uppercase alphabetic letter,
    - find the number at shiftValues[shiftValuesIndex] and declare it to a variable shiftAmount
    - declare a variable encryptedIndex and iniitialize it to the return value of
      adding shiftAmount to the index of the currentChar in the uppercase array
    - if shiftAmount is greater than 25, subtract 27 from it
    - append to encryptedString the letter at the encryptedIndex in the uppercase array
    - if shiftValuesIndex is less than 4, add 1, otherwise re-assign it to 0

   - if currentChar is an lowercase alphabetic letter,
    - find the number at shiftValues[shiftValuesIndex] and declare it to a variable shiftAmount
    - declare a variable encryptedIndex and iniitialize it to the return value of
      adding shiftAmount to the index of the currentChar in the lowercase array
    - if shiftAmount is greater than 25, subtract 27 from it
    - append to encryptedString the letter at the encryptedIndex in the lowercase array
    - if shiftValuesIndex is less than 4, add 1, otherwise re-assign it to 0

 - return the encrypted string

*/

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');

function findKeywordShiftValues(word) {
  let shiftValues = [];

  for (let index = 0; index < word.length; index += 1) {
    let currentChar = word[index];

    if (currentChar.match(/[A-Z]/)) {
      let indexOfChar = uppercase.indexOf(currentChar);
      shiftValues.push(indexOfChar);
    } else {
      let indexOfChar = lowercase.indexOf(currentChar);
      shiftValues.push(indexOfChar);
    }
  }

  return shiftValues;
}

function getEncryptedIndex(shift, index) {
  if ((shift + index) > 25) {
    index -= 26;
  }

  return shift + index;
}

function findNextShiftValue(index, maxIndex) {
  if (index < maxIndex) {
    return index += 1;
  } else {
    return 0;
  }
}

function vigenereCipher(plaintext, keyword) {
  let shiftValues = findKeywordShiftValues(keyword);
  let currentShiftValuesIndex = 0;
  let maximumIndex = shiftValues.length - 1;

  let encryptedString = '';

  for (let index = 0; index < plaintext.length; index += 1) {
    let currentChar = plaintext[index];

    if (currentChar.match(/[^A-Za-z]/)) {
      encryptedString += currentChar;
    } else if (currentChar.match(/[A-Z]/)) {
      let shiftAmount = shiftValues[currentShiftValuesIndex];
      let indexOfChar = uppercase.indexOf(currentChar);
      let encryptedIndex = getEncryptedIndex(shiftAmount, indexOfChar);
      encryptedString += uppercase[encryptedIndex];
      currentShiftValuesIndex = findNextShiftValue(currentShiftValuesIndex, maximumIndex);
    } else if (currentChar.match(/[a-z]/)) {
      let shiftAmount = shiftValues[currentShiftValuesIndex];
      let indexOfChar = lowercase.indexOf(currentChar);
      let encryptedIndex = getEncryptedIndex(shiftAmount, indexOfChar);
      encryptedString += lowercase[encryptedIndex];
      currentShiftValuesIndex = findNextShiftValue(currentShiftValuesIndex, maximumIndex);
    }
  }

  return encryptedString;
}

// provided
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'meat')); //  'Bmnxmtpeqw dhz'x gh ar pbldal!'

// // happy cases
console.log(vigenereCipher('helloworld', 'hi')); // 'omstvdvzsm'
// // 'h' -> 7 , 'i' -> 8
// he ll ow or ld
// om st vd vz sm

// boundary cases
// vigenereCipher('helloworld', 'helloworld'); //
// vigenereCipher('hello world', 'helloworldthere'); //
// vigenereCipher('hello world', 'HeLLO');
// vigenereCipher('hello world', 'hii'); //

// boundary cases
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'A')); // 'Pineapples don't go on pizzas!'
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'Aa')); // 'Pineapples don't go on pizzas!'
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'cab')); // 'Riogaqrlfu dpp't hq oo riabat!'
console.log(vigenereCipher("Dog", "Rabbit")); // "Uoh"
