// let rlSync = require('readline-sync');
// let length = Number(rlSync.question('Enter the length of the room in meters: '));
// let width = Number(rlSync.question('Enter the width of the room in meters: '));

// const SQUARE_METERS_TO_FEET_CONVERSION = 10.7639;
// let squareMeters = length * width;
// let squareFeet = squareMeters * SQUARE_METERS_TO_FEET_CONVERSION;

// console.log(`The area of the room is ${squareMeters} square meters \
// (${squareFeet} square feet)`);

let rlSync = require('readline-sync');
const SQUARE_METERS_TO_FEET_CONVERSION = 10.7639;

let units = rlSync.question('Enter units (meters or feet): ');
let length = Number(rlSync.question(`Enter the length of the room in ${units}: `));
let width = Number(rlSync.question(`Enter the width of the room in ${units}: `));

if (units === 'meters') {
  let squareMeters = length * width;
  let squareFeet = squareMeters * SQUARE_METERS_TO_FEET_CONVERSION;

  console.log(`The area of the room is ${squareMeters} square meters \
(${squareFeet.toFixed(2)}).`)
} else {
  let squareFeet = length * width;
  let squareMeters = squareFeet / SQUARE_METERS_TO_FEET_CONVERSION;

  console.log(`The area of the room is ${squareFeet} square feet \
(${squareMeters.toFixed(2)}).`)
}
