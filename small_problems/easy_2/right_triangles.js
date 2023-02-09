/*

Input = a number
Output = a right triangle

Rules
1. For a right triangle, all sides are 9 in length
2. for each row we subtract 1 from the number of '*'s and
then add 1 to the number of spaces ' '

Algorithm
1. define a function triangle that takes an integer, number, as an argument
2. start a for loop, whose counter is lineNumber and starts at the parameter
number, continues while lineNumber is greater than or equal to 1, and subtracts 1 to lineNumber
3. declare a variable outputString and initialize it to an empty string
4. Initialize a for loop and initlaize spaceCounter to 0, continue the for loop until spaceCounter
is greater than or equal to the parameter number minus lineNumber, add 1 to spaceCounter,
inside the for loop concatenate a space ' ' to output string
5. Initialize a for loop and initialize starCounter to 0, continue the for loop until starCounter
is greater than or equal to the lineNumber, add 1 to starCounter, inside the loop concatenate
a star '*' to the output string
6. log the output string to the consoole
7. re-assign the output strint to an empty string
*/

function triangle(number) {
  for (let lineNumber = 1; lineNumber <= number; lineNumber += 1) {
    let outputString = '';

    for (let spaceCounter = 1; spaceCounter <= (number - lineNumber); spaceCounter += 1) {
      outputString += ' ';
    }

    for (let starCounter = 1; starCounter <= lineNumber; starCounter += 1) {
      outputString += '*';
    }

    console.log(outputString);
    outputString = '';
  }
}

triangle(5);
triangle(9);
