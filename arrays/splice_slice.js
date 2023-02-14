/*
Input = 3 arguments - an array, a start index and an end index
Output = a NEW ARRAY of elements from the start index to the end index (not including the end index element)

Rules
1. begin and end will always be integers greater than or equal to 0
2. do not include the element at the end index
3. if begin or end are greater than the array length set them to the array length
4. if end is less than begin, return an empty array
5. if begin is equal to or greater than the length of the array return an empty array
5. non-mutating does nothing to the origional array

*/

function slice(array, begin, end) {
  if (end > array.length) {
    end = array.length
  }

  let elements = [];

  for (let index = begin; index < end; index += 1) {
    elements.push(array[index]);
  }

  return elements;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]


/*
Input = an array, start, number of elements we are deleting, number of elements we are inserting
Output = returns the deleted elements or an empty array if no elements are deleted

Rules
1. if the value of start is greater than the length of the array, set it equal to the length
2. if the value of deleteCount is greater than the number of elements from start up to the end of the array, set
deleteCount to the difference between the array's length and start
  - if deleteCount is greater than lenght - start, set it equal to length - start
3. if args is empty, only remove elements from the array
4. returns the deleted elements in an array, if no elements deleted returns an empty array
5. MUTATES the origional array

Algorithm
1. define a function splice with four parameters array,s tart, deleteCount, ...args
2. if start is greater than the length of the array, set it equal to the length
3. if deleteCOunt is greater than the length of the array minus start, set it equal to the length of the array minus start
4. declare a variable deletedItems and initialize it to an empty array
5. declare a variable counter and initialize it to deleteCount
5. Iterate through the input array starting at start index and adding by 1, iterate until counter is less than or equal to 0
6. push the current item into the deletedItems array
7. subtract 1 from delete count
8.
*/


function splice(array, start, deleteCount, ...args) {
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;

  const arrayCopy = slice(array, 0, array.length);
  const elementCount = args.length;
  const newLength = array.length + elementCount - deleteCount;
  array.length = newLength;

  for (let i = 0; i < elementCount; i += 1) {
    array[start + i] = args[i];
  }

  let copyBackCount = arrayCopy.length - (start + deleteCount);
  for (let i = 0; i < copyBackCount; i += 1) {
    array[start + elementCount + i] = arrayCopy[start + deleteCount + i];
  }

  return slice(arrayCopy, start, start + deleteCount);
}


console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]
