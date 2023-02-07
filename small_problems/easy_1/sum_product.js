let rlSync = require('readline-sync');

let limit = Number(rlSync.question('Please enter an integer greater than 0: '));
let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product: ');

let product = 0;

if (operation === 's') {
  let sum = 0;

  for (let counter = 1; counter <= limit; counter += 1) {
    sum += counter
  }

  console.log(`The sum of the integers between 1 and ${limit} is ${sum}. `)

} else if (operation == 'p') {
  let product = 1;

  for (let counter = 1; counter <= limit; counter += 1) {
    product *= counter;
  }

  console.log(`The product of the integers between 1 and ${limit} is ${product}. `)
}
