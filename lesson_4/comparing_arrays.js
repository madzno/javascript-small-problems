/*
Input = two arrays
Output = a boolean, true or false

Rules
1. return true if the two arrays contain the same contents (same elements
in the same order)
2. return false if the two arrays have any differing contents
3. must be the same length to be equal

Algorithm
1. define a function arraysEqual that takes two arrays arr1 and arr2 as arguments
2. return false if the two array's lengths aren't equal
3. iterate through arr1 by index, if at any point the current element in arr1
is not equal to the corresponding element in arr2 return false
4. return true if all elements are the same
*/

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let index = 0; index < arr1.length; index += 1) {
    if (arr1[index] !== arr2[index]) return false;
  }

  return true;
}




console.log(arraysEqual([1], [1]));                               // true
console.log(arraysEqual([1], [2]));                               // false
console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false
