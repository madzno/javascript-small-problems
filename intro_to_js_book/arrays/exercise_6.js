let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(array) {
  let lengthsArr = array.map(string => string.length);
  return lengthsArr.filter(num => num % 2 !== 0);
};
