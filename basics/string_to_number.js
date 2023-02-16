function stringToInteger(string) {
  let digits = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 8,
  };

  let number = 0;

  for (let index = 0; index < string.length; index += 1) {
    let lengthUntilEndOfString = string.slice(index).length;
    let multiplyer = digits[string[index]];
    let place = Math.pow(10, lengthUntilEndOfString - 1);
    number += (multiplyer * place);
  }

  return number;
}


console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
