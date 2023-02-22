function wordSizes(string) {
  if (string.length === 0) return {};

  let wordsArr = string.split(' ');
  let cleanedWordsArr = wordsArr.map(word => word.replace(/[^A-Za-z0-9]/g, ''));
  let sizesObj = {};

  for (let index = 0; index < cleanedWordsArr.length; index += 1) {
    let lengthKey = cleanedWordsArr[index].length;

    if (sizesObj[lengthKey]) {
      sizesObj[lengthKey] += 1;
    } else {
      sizesObj[lengthKey] = 1;
    }
  }

  return sizesObj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
