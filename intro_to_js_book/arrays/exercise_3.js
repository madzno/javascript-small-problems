let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// solution 1: nested iteration

myArray.forEach(function (arr) {
  arr.forEach(function (num) {
    if (num % 2 === 0) {
      console.log(num);
    }
  });

});

// solution 2: flat()

myArray.flat().forEach(function (num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});
