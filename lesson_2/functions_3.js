function average(arr) {
  let total = 0;

  for (let index = 0; index < arr.length; index += 1) {
    total += arr[index];
  }

  return total / arr.length;
}

console.log(average([1, 2, 3, 4, 5]));
