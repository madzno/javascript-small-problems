function wordCount(string) {
  let wordsArray = string.split(' ');
  let counts = {}

  for (let index = 0; index < wordsArray.length; index += 1) {
    let currentWord = wordsArray[index];

    if (counts[currentWord]) {
      counts[currentWord] += 1;
    } else {
      counts[currentWord] = 1;
    }
  }

  return counts;
}


console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }
