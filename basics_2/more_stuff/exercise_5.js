function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// string.split returns the input string split on whitespace in an array of strings
// reverse() reverses the order of the strings in that array
// map((value => value.length)) transforms the strings in the array to a number
// that represents their length property
