/*
Input = an array
Output = an array of running totals

Rules
1. if array is empty return an empty array
2. the first element of the array is its first element
3. the subsequent elements are the "running total" which is the
current element plus the previous element(s)

Algorithm
1. define a function runningTotal that takes an array as an argument
2. if arr is empty return an empty array
3. declare a variable totalsArray and initialize it to an empty array
with one element, the element at the input array arr[0]
4. declare a variable total to the value of arr[0]
5. iterate through the input array starting at index 1, until the end of the
array, and increment by 1
6. declare a variable Currentsum and initialize that to the current value of total
plus the current element
7. re-assign total to Currentsum and push CurrentSum to totalsArray
8. return totalsArray
*/

function runningTotal(arr) {
  if (arr.length === 0) return arr;

  let totalsArray = [arr[0]];
  let total = arr[0];

  for (let index = 1; index < arr.length; index += 1) {
    let currentSum = total + arr[index];
    totalsArray.push(currentSum);
    total = currentSum;
  }

  return totalsArray;
}

// function runningTotal(arr) {
//   let sum = 0;
//   return arr.map(function (num) {
//     sum += num;
//     return sum;
//   });
// }

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
