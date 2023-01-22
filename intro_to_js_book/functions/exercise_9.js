function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

// the variables in this code include multiply, left, right, product, getNumber, prompt,
// question, parseFloat (built-in funcitons are also variable names), console

// global = left on line 10, right on line 11, console on line 12, multiply on line 1, getNumber on line 6, getNumber on line 10 and 11
// parsFloat and question on line 7
// local = left and right on line 1, 2, product on line 2 and line 3, prompt on line 6, prompt
// on line 7

// the left and right variables on lines 1 and 2 are not the same as the left and right variables on lines 10-12
// the left and right variables on lines 1 and 2 are local to the multiply function while the left and right
// variables define d on lines 10-12 are global variables
