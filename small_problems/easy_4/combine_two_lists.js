/*
Input = two arrays
Output = one array with each of the elements array's alternating

Algorithm
1. define a function interleave with two parameters, arr1 and arr2
2. declare a variable interleavedArr and initialize it to an empty array
2. iterate through the first array with the index parameter
3. for each element the first array, append it interleaveArr and append the
element at the same index in the second array to interleaveArr
4. return interleaveArr
*/

function interleave(arr1, arr2) {
  let interleavedArr = [];

  arr1.forEach((number, index) => {
    interleavedArr.push(number, arr2[index]);
  });

  return interleavedArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
