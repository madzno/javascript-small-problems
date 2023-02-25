// function union(arr1, arr2) {
//   let duplicatesRemoved = [];

//   for (let index = 0; index < arr2.length; index += 1) {
//     if (!arr1.includes(arr2[index])) {
//       duplicatesRemoved.push(arr2[index]);
//     }
//   }

//   return arr1.concat(duplicatesRemoved);
// }

function union(arr1, arr2) {
  let duplicatesRemoved = [];

  arr2.forEach(number => {
    if (!arr1.includes(number)) {
      duplicatesRemoved.push(number);
    }
  });

  return arr1.concat(duplicatesRemoved);
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
