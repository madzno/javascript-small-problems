function generateNumber(string) {
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

  let startingIndex;
  if (string[0] === '-' || string[0] === '+') {
    startingIndex = 1
  } else {
    startingIndex = 0
  }

  for (let index = startingIndex; index < string.length; index += 1) {
    let lengthUntilEndOfString = string.slice(index).length;
    let multiplyer = digits[string[index]];
    let place = Math.pow(10, lengthUntilEndOfString - 1);
    number += (multiplyer * place);
  }

  return number;
}

function stringToSignedInteger(string) {
  let unsignedNumber = generateNumber(string);

  let signedNumber;
  if (string[0] === '-') {
    signedNumber = unsignedNumber * -1;
  } else {
    signedNumber = unsignedNumber;
  }

  return signedNumber;
}


console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
