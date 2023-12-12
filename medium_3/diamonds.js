/*
Input = an odd integer
Output = a four pointed diamond displayed on an n x n grid (console.log output)

Examples/Test Cases
diamond(1);
// logs
*

diamond(3);
//logs
 *
***
 *

diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

Implicit Rules from test cases
- the input number represents the "center"/longest row in the diamond
- rows leading up to that and down from that have an odd number of diamonds
(i.e 1, 3, 5, 7, 9, 7, 5, 3, 1)
- spaces pad either side of the diamond and are equal to the current number of diamonds
subtracted from the input number, divided by 2
  - 9 - 1 = 8, 4 spaces on either side
  - 9 - 3 = 6, 3 spaces on either side
  - 9 - 5 = 4, 2 spaces on either side
  - 9 - 7 = 2, 1 space on either side
  - 9 - 9 = 0, 0 spaces on either side

Edge Cases
- number will always be odd
- will number ever be a non whole integer?
- negative number?
- zero ?
- infinity or -infinity?
- NaN?

Data Structure
 - will be logging a string to the screen with a certain number of spaces and a certain
number of diamonds

Algorithm
- define a function diamond that takes an odd integer as an argument

- FirstHalf of diamond
- declare a variable numberOfDiamonds and initialize that to 1
- declare a variable numberOfSpaces and initialize that to the input number subtracted by
number of diamonds and divided by 2
- initialize a for loop, the condition of the for loop is that it will have a counter initialized
to the numberOfDiamonds, it will continue while the counter is less than or equal to the input number,
two will be added to counter on each iteration
- inside the loop initialize a variable currentString to the return value of calling repeat on a space
' ' and passing the numberofSpaces as an argument, repeat on a star '*' and passing numberofDiamonds
as an argument, and repeat on a space ' ' and passing number of spaces as an argument
- console log the value of the string to the console
- subtract 1 from numberOfSpaces

secondHalf of diamond
- declare a variable numberofDiamonds and iniitalize it to the input number subtracted by
2
- declare a variable numberofSpaces and initialize that to the input number subtracted by
numberofDiamonds and divided by 2
- initialize a for loop, the condition of the for loop is that it will have a counter initialize
to the number of diamonds, it iwll continue while the counter is greater than or equal to 1,
two will be subtracted to counter
- inside the loop initialize a varaible currentString to the return value of calling repeat ona
space ' ' and passing numberofSpaces as an argument, repeat on a star '*' and passing numberofDiamonds
as an argument, and repeat on a space ' ' and passing number of spaces as an argument
- console log the value of the string to the console
- subtract 2 from numberofDiamonds
- add 1 to numberofSpaces

*/

function firstHalfDiamond(number) {

  for (let numberOfDiamonds = 1; numberOfDiamonds <= number; numberOfDiamonds += 2) {
    let numberOfSpaces = (number - numberOfDiamonds) / 2;

    let currentString = ' '.repeat(numberOfSpaces) + '*'.repeat(numberOfDiamonds) +
      ' '.repeat(numberOfSpaces);

    console.log(currentString);
  }
}

function secondHalfDiamond(number) {

  for (let numberOfDiamonds = number - 2; numberOfDiamonds >= 1; numberOfDiamonds -= 2) {
    let numberOfSpaces = (number - numberOfDiamonds) / 2;

    let currentString = ' '.repeat(numberOfSpaces) + '*'.repeat(numberOfDiamonds) +
      ' '.repeat(numberOfSpaces);

    console.log(currentString);
  }
}

function diamond(number) {
  firstHalfDiamond(number);
  secondHalfDiamond(number);
}


diamond(1);
diamond(3);
diamond(9);
