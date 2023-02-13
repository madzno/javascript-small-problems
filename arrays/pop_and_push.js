function pop(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let lastElement = arr[arr.length - 1]
  arr.length = arr.length - 1
  return lastElement;
}


/*
Input = an array and multiple arguments (also an array of elements)
Ouptu = the length of the resulting array

Rules
1. destructively add the arguments to the end of the first input array
2. if no arguments are passed as a second argument return the origional array

Algorithm
1. define a function push with a paramter arr and an argument parameter with rest syntax (multiple arguments can be passed
as the second argument)
2. if there are 0 second argumetns, return the length of the array as is
3. iterate through the input arguments (will be available in the funciton body as an array) by index
4. declare a variable length inside the loop and initialize it to the current length of the first array
5. assign the current argument to the index that is the value of array.length
6. return the length of the array
*/

function push(arr, ...args) {
  for (let index = 0; index < args.length; index += 1) {
    let currentLength = arr.length;
    arr[currentLength] = args[index];
  }

  return arr.length;
}

// pop
const array1 = [1, 2, 3];
console.log(pop(array1));                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push
const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0
