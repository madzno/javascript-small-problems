/*
Input = two strings, one string that represents  the string to be split
and a second that is the deliminator that we will be split on

Output = strings split based on that deliminator

Algorithm
1. Define a function splitString with two parameters string and deliminator
2. Guard clause: if there is no delimiter argument, raise an error
2. Declare a variable output to an empty array
3. Declare a variable splitString and assign it to an empty string
4. iterate through the input string starting with index 0
 4a. if the current character is not the deliminator, add the character
   to the stringSplit string
4b. if the current character is the deliminator, push the current stringSplit
to the output array and re-assign it to an empty string, then continue iteration
5. after iterating through the input string, output each element int he output
array to the screen
*/

// function errorForDelimiter(string, delimiter) {
//   if (delimiter === undefined) {
//     console.log('ERROR: No delimiter');
//     return;
//   }
// }

// function charSplit(string, delimiter) {
//   if (delimiter == '') {
//     for (let index = 0; index < string.length; index += 1) {
//       console.log(string[index]);
//     }
//     return;
//   }
// }

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  if (delimiter == '') {
    for (let index = 0; index < string.length; index += 1) {
      console.log(string[index]);
    }
    return;
  }


  let outputArray = [];
  let currentString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === delimiter) {
      outputArray.push(currentString);
      currentString = '';
    } else {
      currentString += string[index]
    }
  }

  if (currentString !== '') {
    outputArray.push(currentString);
  }

  outputArray.forEach(word => console.log(word));
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
