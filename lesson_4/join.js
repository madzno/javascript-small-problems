/*
Input = an array and a string
Output = a string of the elements in the array concatenated and deliminated
byt he passed in string

Rules
1. does not affect the origional passed in array
2. each array element should alternate with the passed in string

Algorithm
1. define a method join with two parameters arr and delimiter
2. declare a variable arayWithDelimiter to an empty array
3. iterate through the input array, for each element in the array push
the element followed by the delimiter to the arrayWithDelimiter array,
if its the last element in the input array, just push the element without
the delimiter
4. declare a vriable joinedString and initilaize it to an empty string
5. iterate through the arrayWithDelimiter and append each element to the
joinedString
*/

function join(arr, delimiter) {
  let arrayWithDelimiter = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (index === arr.length - 1) {
      arrayWithDelimiter.push(arr[index]);
    } else {
      arrayWithDelimiter.push(arr[index]);
      arrayWithDelimiter.push(delimiter);
    }
  }

  let joinedString = '';

  for (let index = 0; index < arrayWithDelimiter.length; index += 1) {
    joinedString += arrayWithDelimiter[index];
  }

  return joinedString;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
