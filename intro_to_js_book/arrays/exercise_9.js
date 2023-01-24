let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(findThree(numbers1)); // => true
console.log(findThree(numbers2)); // => false
console.log(findThree(numbers3)); // => false

function findThree(arr) {
  return arr.includes(3);
};
