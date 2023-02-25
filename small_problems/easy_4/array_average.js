function average(arr) {
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  return Math.floor(sum / arr.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
