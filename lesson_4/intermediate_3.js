// function sortDescending(arr) {
//   let sortedArr = arr.slice().sort(function compareFn(a, b) {
//     if (Number(b) < Number(a)) {
//       return -1;
//     } else if (Number(b) > Number(a)) {
//       return 1;
//     } else {
//       return 0;
//     }
//   })

//   return sortedArr;
// }

// let array = [23, 4, 16, 42, 8, 15];
// let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

function sortDescending(arr) {
  let arrCopy = arr.slice();

  return arrCopy.sort((a, b) => b - a);
}

function sortAscending(arr) {
  let arrCopy = arr.slice();

  return arrCopy.sort((a, b) => a - b);
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

let array2 = [1, 22, 331, 99, 2];
let result2 = sortAscending(array2);
console.log(result2); // logs [1, 2, 22, 99, 331]
console.log(array2); // logs [1, 22, 331, 99, 2]
