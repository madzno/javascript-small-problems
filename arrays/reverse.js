function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    let reversedArray = []

    for (let index = inputForReversal.length - 1; index >= 0; index -= 1) {
      reversedArray.push(inputForReversal[index]);
    }

    return reversedArray;

  } else {
    let reversedString = '';

    for (let index = inputForReversal.length - 1; index >= 0; index -= 1) {
      reversedString += inputForReversal[index];
    }

    return reversedString;
  }
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
