let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(array) {
  return array.reduce((accumulator, strings) => {
    let length = strings.length;
    if (length % 2 === 1) {
      accumulator.push(length);
    }

    return accumulator;
  }, []);
};
