function isNegativeZero(num) {
  return 1 / num === -Infinity;
}

console.log(isNegativeZero(0)); //false
console.log(isNegativeZero(-0)); //true
console.log(isNegativeZero(5)); //false
