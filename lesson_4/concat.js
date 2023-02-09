/*
Input = two arrays
Output = a single NEW array with elements from both arrays combined

Rules
1. returns a new array
2. new array contains all the elements from both input arrays, in the
same order as they appear in the origional arrays
3. order of elements of new array is elements from the first array first
and second array second
*/

function concat(arr1, arr2) {
  let combinedArr = [];

  for (let index = 0; index < arr1.length; index += 1) {
    combinedArr.push(arr1[index]);
  }

  for (let index = 0; index < arr2.length; index += 1) {
    combinedArr.push(arr2[index]);
  }

  return combinedArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]
