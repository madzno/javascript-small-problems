// function product(...numbers) {
//   return numbers.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);

function product() {
  let numbers = Array.prototype.slice.call(arguments);
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);

