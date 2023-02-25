/*
Input = an array
Output = output to the console that lists each element followed by => and the number of
occurences of it in the input array

Rules
1. count the elements in the order that they appear in the input array
2. the method should output something but doesn't return a useful value

Data Structure
Object literal to hold counts

Algorithm
- define a function countOccurrences with a parameter arr
- declare a variable counts and initialize it to an object literal
- iterate through the input arr, if the current element is a key in counts, add 1 to the value of it
  - if the current element is not a key, then add it as a key with a value of 1
- iterate through counts with a for..in loop
- for each property name-value output the string `${element} => ${counts[element]}`
*/

function countOccurrences(arr) {
  let counts = {};

  arr.forEach(element => {
    if (counts[element]) {
      counts[element] += 1;
    } else {
      counts[element] = 1;
    }
  });

  for (let item in counts) {
    console.log(`${item} => ${counts[item]}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
