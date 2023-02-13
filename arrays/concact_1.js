/*
Input = two arrays or an array and another value
Output = a single array with the values from the first argument
concatenated with the values from the second argument in order

Rules
1. the first argument will always be an array
2. the second argument can be anything - a primitive value such as a number, another array, a string, or
an object
3. the function should return a new array
4. the elements in the new array should be in the same order as they appeared in the arguments
5. If the second argument is an object, then a REFERENCE should be copied into the returned array
5. If the second argument is a primitive, then a COPY should be copied into the returned array (no choice for this really)


Algorithm
1. define a method concat that takes two arguments, an array and a second argument
2. declare a variable combinedArray and initialize it to the first argument
3. if the secondArgument is an array, iterate through it and push each item to the end of the
combinedArray
4. if the secondArgument is not an array, push the entire object to the combinedArray
5. return combinedArray
*/


function concat(array1, secondArgument) {
  let combinedArray = array1;

  if (Array.isArray(secondArgument)) {
    for (let index = 0; index < secondArgument.length; index += 1) {
      combinedArray.push(secondArgument[index]);
    }
  } else {
    combinedArray.push(secondArgument);
  }

  return combinedArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                     // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'));                // [2, 3, "four"]


const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
console.log(obj);                                   // { a: "two", b: 3 }
