/*
Input = an array
Output = an array

Rules
1. input array is a sorted array of integers
2. returns any missing integers in order between the first and last elements
 - "missing" means they are required to complete a sequence from first element to last element

Algorithm
1. define a function missing that takes an array as an argument
2. declare a variable missingNums to an empty array
4. initailze a for loop
  - declare a variable counter and assign it to the first element in the input array
  - while the counter is less than the final element in the array (array.length - 1)
  - add 1 to the counter
5. if the current counter is NOT included in the input array, push it to missing Nums
6. return missingNums
*/

function missing(arr) {
  let missingNums = [];

  for (let counter = arr[0]; counter < arr[arr.length - 1]; counter += 1) {
    if (!arr.includes(counter)) {
      missingNums.push(counter);
    }
  }

  return missingNums;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
