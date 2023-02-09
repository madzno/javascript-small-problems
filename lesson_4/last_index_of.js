/*
Input = an array and a element
Output = returns the last index that the value can be found or -1 if the value is not present

Rules
1. returns the LAST index that the value can be found
2. returns -1 if the value is not present

Algorithm
1. declare a funciton lastIndexOf that takes an array and an element as arguments
2. iterate through the input array from last element (array.length - 1) to first, 0
3. if the current element is the same as the input element, return the index
4. if you iterate through the whole array and there is no match, return -1
*/

function lastIndexOf(arr, element) {
  for (let index = arr.length - 1; index >= 0; index -= 1) {
    if (arr[index] === element) return index;
  }

  return -1;
}


console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1
