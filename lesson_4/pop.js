/*
Input = an array
Output = the removed element from the array

Rules
1. function should mutate the array
2. function should permenantly remove the last element of the array
3. function should return the removed element from the array
*/

function pop(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let lastElement = arr[arr.length - 1];
  arr.length = arr.length - 1
  return lastElement;
}

let count = [1, 2, 3];
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]
