/*
Input = an array, a starting index (integer), and the number of values to remove from the array (integer)
Output = the removed items in an array

Rules
1. the starting index tells us where to start removing items
2. the number of items to remove counts from the starting index (inclsive) and
tells us how many items to remove
3. return the removed items in a new array
4. is mutating

Algorithm
1. define a function splice that takes three arguments, an array, a starting index,
and an integer representing how many items to remove
2. declare a variable removedItems and initialize to an empty array
3. declare a variable endIndex and initialize it to startIndex + removeCount - 1
4. iterate through the input array starting at startIndex, add 1 to the index, and
stop when the index is greater than end index
5. push the current element to the removedItems array and re-assign it to undefined
6. iterate through the input array BACKWARDS by index
  - if the current element is undefined pop it off of the array
  - if the current element is not undefined, unshift it to the front of the array and
  then call pop
7. return removedItems


*/

function splice(arr, startIndex, removeCount) {
  let removedItems = [];

  for (let index = startIndex; index < arr.length; index += 1) {
    if (index < startIndex + removeCount) {
      removedItems.push(arr[index]);
    }

    arr[index] = arr[index + removeCount];
  }

  arr.length = arr.length - removedItems.length;
  return removedItems;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]
