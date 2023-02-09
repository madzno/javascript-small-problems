/*
Input = an array and a value
Ouput = the new length of the array

Rules
1. the function should mutate the passed in array
2. the funciton should append the value to the front of the array
3. the function should return the new value of the array

[1, 2, 3]
[0, 2, 3] => re-assign value passed in to index 0
[0, 2, 3, 1] => add previous starting element to end of the array
- need to assign the element at the current index (1) to currentElement
and re-assign the element at the end of the array to the current index
- then add the currentElement to the end of the array

[0, 1, 3, 2] => remove element at index 1 and add to end of the array
- need to assign the element at the current in
[0, 1, 2, 3] => remove element at index 2 and add to end of the array
[0, 1, 2, 3] => remove element at index 3 and add to end of the array


Algorithm
1. define a function unshift that takes two parameters an array arr
and an element
2. declare a variable firstElement and assign it to the element at index 0 of
the array
3. re-assign the element at index 0 to the element passed in
4. push the firstElement to the end of the array
5. initialize a variable currentElement
5. iterate throught he array starting at index 1, while the index is less than the
arrays length, and adding 1 to the index
6. re-assign currentElement to the element at the current index
7. re-assign the current index to the element at the end of the array
8. then add the current Element to the end of the array
9 when your done iterating return the length of the array
*/

function unshift(arr, element) {
  let firstElement = arr[0];
  arr[0] = element;
  arr.push(firstElement);

  for (let index = 1; index < arr.length; index += 1) {
    let currentElement = arr[index];
    arr[index] = arr[arr.length - 1];
    arr.pop()
    arr.push(currentElement);
  }

  return arr.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]
