/*
Input = an array, a start index (integer), and an end index (integer)
OUptut = a new array that contains the values from the origional
array starting with the starting index and all values up to
but not including the end index

Rules
1. return a new array, don't modify the old one
2. return the elements from th starting index and up to but NOT including end index

Algorithm
1. define a function slice that takes three arguments, an array, startIndex, and endIndex
2. declare a variable newArr and initialize it to an empty array
3. iterate through newArr starting at startIndex and push the current element to the
array, increment by 1 and stop when you reach endIndex
4. return newArr
*/

function push(array, element) {
  array[array.length] = element;
  return array.length;
}

function slice(arr, startIndex, endIndex) {
  let newArr = [];
  for (let index = startIndex; index < endIndex; index += 1) {
    push(newArr, arr[index]);
  }

  return newArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]
