function isNotANumber(num) {
  return !Number.isInteger(num);
}



console.log(isNotANumber(NaN));
console.log(isNotANumber(2));
