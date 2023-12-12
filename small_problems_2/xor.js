/*
Input = two values, can be anything
Output = true if ONE of the operands is true and false otherwise
(i.e false if true and true or false and false)


Algorithm
1. define a function `isXOR` that takes two arguments operand1, operand2
2. return false if operand1 is true and operand2 is true
3. return false if operand1 is false and operand2 is false
4. otherwise return true
*/

function isXor(operand1, operand2) {
  if (!!operand1 === true && !!operand2 === true) {
    return false;
  } else if (!!operand1 === false && !!operand2 === false) {
    return false;
  }

  return true;
}


console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false


console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false
