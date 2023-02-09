/*
Input = an integer
Output = an integer

Rules
1. if the input integer is a double number, return it as is
2. if the input integer is not a double number, return it
times 2
3. a double number is an even length number whose left side
digits are exactly the same as its right side digits


Algorithm
1. Dtermine if the number is a double number
  1a. Write a helper function isdoubleNumber that returns true if the number
   is a double number and false if not
  1b. if the input number converted to a string's length is not even, return false
  1c. if the input number is even, convert the number to a string
    - declare a variable firstHalf and initialize it to the return value of slicing the string
    from 0 up until the string's length divided by 2
    - declare a varaible secondHalf and initialize it to the return value of slicing the string
    from the string's length divided by 2 until string.length (end of the string)
    - if firstHalf is equal to secondHalf return true, otherwise return false
2. If isdoubleNumber returns true, return the input number as is, if isdoubleNumber returns
false reutnr the input number times 2
*/

function isDoubleNumber(number) {
  if (String(number).length % 2 === 1) {
    return false;
  }

  let numberString = String(number);
  let firstHalf = numberString.slice(0, (numberString.length / 2));
  let secondHalf = numberString.slice((numberString.length / 2), numberString.length);

  if (firstHalf === secondHalf) {
    return true;
  } else {
    return false;
  }
}

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
