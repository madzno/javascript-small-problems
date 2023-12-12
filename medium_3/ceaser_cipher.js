/*
Input
 - A string and a number that represents the number of positions
 - What if one or no arguments are given?
 - What if more than two arguments are given?
 - What if the arguments givne are different than a string and a number?

 - String
  - Can it be an empty string?
  - Can it contain alphabetic characters as well as other characters?
   - Can contain any type of characters, only alphabetic uppercase and lowercase
   are decoded, other characters are kept the same

  -Number
   - What if it is 0? - don't shift
   - What if it is a negative? - doesn't happent
   - Fractional?
   - Infinity or -Infinity?
   - If the number exceeds the length of the alphabet (i.e > 26), it
   wraps around from the beginning

Output
 - A encoded string
 - Keep non alphabetic characters the same in the output string
 - Only subsitute lowercase letters with lowercase letters and uppercase letters with
 uppercase letters
 - the number represents the number of letters we are "shifting" for the output
  - for example - 2
  'T' becomes 2 letters later in the alphabet -- 'V'
  'a' becomes 2 letters later -- '2'
 - If adding the number provided to the position of the letter in the alphabet
 it "wraps around" from the beginning

 Data structure
  - two array's to keep the values of the upper and lowercase alphabets
  - empty string to store the new value of the string

['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
[0,    1 ,  2,   3,   4,   5,   6,  7,    8,  9     10   11   12   13   14   15  16   17    18    19   20   21  22    23  24   25]
ceaserEncrypt('A', 0) --> 'A'
ceaserEncrypt('A', 3) --> 'D'

ceaserEncrypt('y', 5)
y is at position 24
+ 5 = 30 which is > 25

Algorithm
 - define a function ceaserEncrypt that takes two parameters inputString and addedPosition
 - declare a constant uppercaseLetters and initialize it to an array of all uppercase letters
 - declare a constant lowercaseLetters and initialize it to an array of all lowercase letters

 - declare a variable encryptedString and initialize it to an empty string

 - iterate through the inputString by index with a for loop
 - if the current character is not an alphabetic character, add it as is to the encryptedString
 - if the current char is an uppercase alphabetic character,
   - declare a variable char index to the index of the current char in the uppercase array
   - declare a variable encryptedLetterIndex to the return value of calling the findEncryptedIndex function
   with the current char's index and the parameter number

   - rotationAmount function with two parameters - index and positionNum
   - declare a variable amountToAdd and initilaize it to the value of positionNum
   - if amountToAdd plus the index value is greater than 25, subtract 26 from amountToAdd
   - return the value of index plus amountToAdd

   - append the character at encryptedLetterIndex to the encryptedString
- if the current char is a lowercase alphabetic character,
  - declare a variable char index to the index of the current char in the lowercase array
  - declare a variable encryptedLetterIndex and initialize it to the return value of calling the findEncryptedIndex
  function with the current char's index and the parameter number

   - append the character at encryptedLetterIndex to the encryptedString

- return the encryptedString


*/

function findEncryptedIndex(index, number) {
  let resultNum = number;

  while (resultNum + index > 25) {
    resultNum -= 26;
  }

  return resultNum + index;
}

function caesarEncrypt(inputString, num) {
  const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let encryptedString = ''

  for (let index = 0; index < inputString.length; index += 1) {
    let currentChar = inputString[index];

    if (currentChar.match(/[^A-Za-z]/)) {
      encryptedString += currentChar;
    } else if (currentChar.match(/[A-Z]/)) {
      let indexInUppercaseArr = uppercaseLetters.indexOf(currentChar);
      let encryptedLetterIndex = findEncryptedIndex(indexInUppercaseArr, num);
      encryptedString += uppercaseLetters[encryptedLetterIndex];
    } else if (currentChar.match(/[a-z]/)) {
      let indexInLowerCaseArr = lowercaseLetters.indexOf(currentChar);
      let encryptedLetterIndex = findEncryptedIndex(indexInLowerCaseArr, num);
      encryptedString += lowercaseLetters[encryptedLetterIndex];
    }
  }

  console.log(encryptedString);

}

// simple shift
caesarEncrypt('A', 0);       // "A" --> add
caesarEncrypt('A', 3);       // "D"

// wrap around - if number is greater than 25 (the last index)
caesarEncrypt('y', 5);       // "d" 24 + 5 = 29, 29 > 25 (last index) 29 - 26 = 4,
caesarEncrypt('a', 47);      // "v" 0 + 47 = 47, 47 > 25 (last index) 47 - 26 = 21, 'v'

// // all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// // wrap around twice
caesarEncrypt('i', 120); // 'y';
caesarEncrypt('A', 26); // 'A' 0 + 26 = 26, 26 > 25, 26 - 26 = 0, 'a'
