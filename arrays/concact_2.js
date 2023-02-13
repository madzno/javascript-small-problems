function concat(array1, ...arguments) {
  let combinedArray = array1;


  for (let index = 0; index < arguments.length; index += 1) {

    if (Array.isArray(arguments[index])) {
      let arrayArgument = arguments[index];

      for (let secondIndex = 0; secondIndex < arrayArgument.length; secondIndex += 1) {
        combinedArray.push(arrayArgument[secondIndex]);
      }

    } else {
      combinedArray.push(arguments[index]);
    }

  }

  return combinedArray;
}


console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]



