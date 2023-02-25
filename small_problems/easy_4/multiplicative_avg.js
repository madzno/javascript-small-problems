function showMultiplicativeAverage(arr) {
  let product = arr.reduce((accumulator, element) => {
    return accumulator * element;
  }, 1)

  return (product / arr.length).toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
