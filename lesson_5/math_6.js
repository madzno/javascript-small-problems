function getRandomInt(min, max) {
  if (max > min) {
    let difference = max - min + 1;
    return Math.floor(Math.random() * difference) + min;
  } else if (min < max) {
    let difference = min - max + 1;
    return Math.floor(Math.random() * difference) + max;
  } else {
    return min;
  }
}

console.log(getRandomInt(5, 1));
