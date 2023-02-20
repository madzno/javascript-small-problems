const NUMBER_OF_TURNS = 6;
const READLINE_SYNC = require('readline-sync');

function getSuffix(num) {
  if (num === 1) {
    return 'st';
  } else if (num === 2) {
    return 'nd';
  } else if (num === 3) {
    return 'rd';
  } else {
    return 'th';
  }
}

function getListofNumbers() {
  let listOfNumbers = [];

  for (let counter = 1; counter < NUMBER_OF_TURNS; counter += 1) {
    let number = READLINE_SYNC.question(`Enter the ${counter}${getSuffix(counter)} number: `);
    listOfNumbers.push(Number(number));
  }

  return listOfNumbers;
}

function lastNumberIncluded() {
  let listOfNumbers = getListofNumbers();

  let lastNumber = Number(READLINE_SYNC.question('Enter the last number: '));

  if (listOfNumbers.indexOf(lastNumber) === -1) {
    console.log(`The number ${lastNumber} does not appear in [${listOfNumbers.join(', ')}]`);
  } else {
    console.log(`The number ${lastNumber} appears in [${listOfNumbers.join(', ')}] `);
  }
}

lastNumberIncluded();
