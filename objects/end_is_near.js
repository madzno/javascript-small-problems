function penultimate(string) {
  let wordsArray = string.split(' ');
  return wordsArray[wordsArray.length - 2];
}

console.log(penultimate('last word'));
console.log(penultimate('Launch School is great!'));
