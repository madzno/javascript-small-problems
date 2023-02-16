function integerToString(number) {
  let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let string = '';

  while (number > 0) {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    string = digits[remainder] + string
  }

  return string;
}

function signedIntegerToString(number) {
  let unsignedString = integerToString(Math.abs(number));

  let signedString;
  if (number < 0) {
    signedString = '-' + unsignedString;
  } else if (number > 0) {
    signedString = '+' + unsignedString;
  } else if (Object.is(number, 0)) {
    return '0';
  } else if (Object.is(number, -0)) {
    return '-0';
  }

  return signedString;
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
console.log(signedIntegerToString(-0));       // -0
