function stringOfValues(arr) {
  let resultString = '';

  for (let index = 0; index < arr.length; index += 1) {
    resultString += arr[index];
  }

  return resultString;
}

console.log(stringOfValues([1, 2, 3, 4, 5]));
console.log(stringOfValues([1, 'a', 4]));
