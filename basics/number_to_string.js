/*
Input = a number
Output = a string

rules
1. otuput the string representation of the number, not using any built in methods

data structure
1. Array that holds the string versions of the number (can access via index numbers)
2. big question: how do we get access to each of the places in the number

4321


*/

function integerToString(number) {
  if (number === 0) return '0';

  let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let string = '';

  while (number > 0) {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    string = digits[remainder] + string
  }

  return string;
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
