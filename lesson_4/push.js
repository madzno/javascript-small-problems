/*
Input = an array and an element
Output = the length of the array

Rules
1. the method mutates the array
2. the method adds the element to the end of the array
3. the method returns the new length of the array

Algorithm
1. define a function push with two parameters array and element
2. destructively add the element to the index at array.length
3. return the new length of the array
*/


function push(array, element) {
  array[array.length] = element;
  return array.length;
}


let count = [0, 1, 2];
console.log(push(count, 3));
console.log(count);
