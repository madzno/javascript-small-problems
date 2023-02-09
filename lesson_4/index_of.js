/*
Input = an array and an element
Output = the first index at which the element can be found, or -1 if the value is
not present

Rules
1. the FIRST index where the element can be found is returns
2. -1 is returned if element not present

Algorithm
1. define a function indexOf that takes an array and an element as argument
2. iterate through the array, if the current element is the same as the
element passed in as an argument, return the current index
3. if no indexes returned during iteration, return -1
*/

function indexOf(arr, element) {
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === element) return index;
  }

  return -1;
}


console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1
