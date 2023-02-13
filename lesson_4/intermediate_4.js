/*
Input = an array of arrays
Output = an single dimensional array of the sums of each of the inner arrays

Rules
1. needs to be a new array with the sums

ALgorithm
1. declare a variable sumsArr
2. iterate through the input array by index
3. for each sub-array, declare a variable initialValue to  0
4. declare a variable sum tot he return value of calling reduce on the sub array and passing the accumulater and
currentvalue as arguments, and summing the accumulator and current value
5. push sum to sumsArr
6. return sumsArr
*/

function matrixSums(arr) {
  let sumsArr = [];

  for (let index = 0; index < arr.length; index += 1) {
    let initialValue = 0;

    let sum = arr[index].reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

    sumsArr.push(sum);
  }

  return sumsArr;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]
