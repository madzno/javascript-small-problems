/*

*/


const MILLISECONDS_PER_MINUTE = 60000;

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}

function timeOfDay(deltaMinutes) {
  let midnight = new Date('2/1/2023 00:00')
  let afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE)
  let hours = padWithZeroes(afterMidnight.getHours(), 2);
  let minutes = padWithZeroes(afterMidnight.getMinutes(), 2);

  return `${hours}:${minutes}`;
}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"
