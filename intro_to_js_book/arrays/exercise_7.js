let array = [3, 5, 7]
console.log(sumOfSquares(array)); // => 83

function sumOfSquares(arr) {
  let squaresArray = arr.map(num => num * num);
  return squaresArray.reduce((accumulator, square) => accumulator + square, 0);
};
