function reverse(arr) {
  let resultArray = [];

  for (let index = arr.length - 1; index >= 0; index -= 1) {
    resultArray.push(arr[index]);
  }

  return resultArray;
}


console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse(['Maddy', 'Ben']))
