/*
Shift
Input = an array
Output = the first element of the array which is permenantly removed

Rules
1. mutates the origional array, removes the first element destructively
2. returns the removed element

Algorithm
1. define a function shift with a parameter arr
2. declare a variable removedElement and assign it to the return value of reversing the input array and calling pop on it
3. reverse the array back to the correct order
4. return the removedElement

*/

/*
Unshift
Input = an array plus two or more elements to be added to the start of the array
Output = the new length of thea rray

Rules
1. mutates the origional array,a dds the first element(s) destructively
2. can take one or more second argumennt s
3. returns the length of the new array

Algorithm
1. define a function unshift with a parameter arr and a second rest parameter ...args
2. reverse arr
3. iterate through args by index BACKWARDS, starting with the last index, ending at index 0 and subtracting 1
from the index
3. push each element from args (in reverse order) to arr
4. re-reverse arr
5. return the length of arr

*/

function shift(arr) {
  let removedElement = arr.reverse().pop();
  arr.reverse();
  return removedElement;
}

function unshift(arr, ...args) {
  arr.reverse();

  for (let index = args.length - 1; index >= 0; index -= 1) {
    arr.push(args[index]);
  }

  arr.reverse();

  return arr.length;
}


console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
