/*

Input = a string
output = a banner with string in the center of it on the console

Rules
1. top and bottom of the banner is deliminated by two +'s plus
'-''s equal to the length of the string + 2
2. there are three | 's in between the top and bottom, one of them
pads the strings

Algorithm
1. define a function that takes a string argument logInBox
2. initialize a for loop, starts with line number 1 and ends with line number 5
3. initialize a local variable ouputString to an empty string
3. for line number's 1 and 5, append a single `+` to the output string first
then initialize a for loop and starting at 1 until the length of the string + 2,
append `-` to the output string, append another `+` to the output string,
console.log the output string.
3. For line number's 2 and 4, append a single `|` to the output string first
then initialize a for loop at starting at 1 until the length of the string + 2,
append spaces ' ' to the output string, append another `|` to the output string,
console.log the output string.
4. For line number 3, append a '| ' to the output string + the string and another ' |'
and console log it to the screen
*/

function logInBox(string) {
  for (let lineNumber = 1; lineNumber <= 5; lineNumber += 1) {
    let outputString = '';

    if (lineNumber === 1 || lineNumber === 5) {
      outputString += '+'
      for (let counter = 1; counter <= string.length + 2; counter += 1) {
        outputString += '-'
      }
      outputString += '+'
    } else if (lineNumber === 2 || lineNumber === 4) {
      outputString += '|'
      for (let counter = 1; counter <= string.length + 2; counter += 1) {
        outputString += ' '
      }
      outputString += '|'
    } else {
      outputString = `| ${string} |`
    }

    console.log(outputString);
    outputString = '';
  }
}

logInBox('To boldly go where no one has gone before.');
logInBox('');

