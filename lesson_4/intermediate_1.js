function oddElementsOf(arr) {
  let oddsArr = []

  for (let index = 0; index < arr.length; index += 1) {
    if (index % 2 === 1) {
      oddsArr.push(arr[index]);
    }
  }

  return oddsArr;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]
