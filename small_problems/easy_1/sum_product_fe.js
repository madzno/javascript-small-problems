function generateIntegersArray(string) {
  let digitsArr = string.split(',');
  let numbersArr = digitsArr.map(num => Number(num));
  return numbersArr;
}

function sumNumbers(arr) {
  sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  return sum;
}

function multiplyNumbers(arr) {
  product = arr.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );

  return product;
}

let rlSync = require('readline-sync');

let limit = rlSync.question('Please enter a list of integers separated by comma: ');
let arrOfNumbers = generateIntegersArray(limit);

let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product: ');

if (operation === 's') {
  let sum = sumNumbers(arrOfNumbers);
  console.log(`The sum of the integers ${limit} is ${sum}. `)
} else if (operation === 'p') {
  let product = multiplyNumbers(arrOfNumbers);
  console.log(`The product of the integers ${limit} is ${product}. `)
}
