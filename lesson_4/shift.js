/*
Input = an array
Otput = the element removed from the array

Rules
1. the function should mutate the array
2. the function should remove the first value from the beginning of the
array and return it

Algorithm
1. define a function shift that takes an array argument
2. assign the first element of the array to a variable RemovedElement
3. initialize a for loop that starts at index 1 and re-assigns the element
at the current index to the index prior, stop iterating when the length of the
array is reached.
4. re-assign the length of the array to the current length -1
5. return removedelement
*/

function shift(arr) {
  let removedElement = arr[0];

  if (arr.length === 0) {
    return undefined;
  }

  for (let index = 0; index < arr.length; index += 1) {
    arr[index] = arr[index + 1];
  }

  arr.length = arr.length - 1;

  return removedElement;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]

let secondCount = [1, 2, 3, 4, 5];
console.log(shift(secondCount));
console.log(secondCount);
