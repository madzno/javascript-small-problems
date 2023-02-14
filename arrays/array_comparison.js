/*
Input = two arrays
Output = a boolean true/false

Rules
To be equal
1. arrays need to be the same length
2. every eleement in array 1 needs to appear in array 2 at least once and vice versa
3. the count of each element in array 1 needs to be the same of the count of that element
in array 2

Algorithm
1. define a function areArraysEqual with two parameters array1 and array2
2. if array1's length is not equal to array2's length, return false
3. declare a variable arrayCopy and initialize it to array1.slice()
3. iterate through arrayCopy by index
5. declare a variable itemIndex and initialize it to the return value of indexOf for
the current item
6. if indexOf returns -1 return false
7. if not, splice the element out of the current array by calling splice(index, 1)
8. return true if never returns -1
*/


function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  let array2Copy = array2.slice();

  for (let index = 0; index < array1.length; index += 1) {
    let currentItemIndex = array2Copy.indexOf(array1[index]);

    if (currentItemIndex >= 0) {
      array2Copy.splice(currentItemIndex, 1);
    } else {
      return false;
    }
  }

  return true;

}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
console.log(areArraysEqual([1, '1'], ['1', 1]));                    // true
