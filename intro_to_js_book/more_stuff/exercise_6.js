/*
Input = an array of strings
OUtput = an array of elements that match the passed regular expression
*/
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(arr, regex) {
  let matchedStrings = [];

  arr.forEach(function (str) {
    if (regex.test(str)) {
      matchedStrings.push(str);
    }
  });

  return matchedStrings;
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
