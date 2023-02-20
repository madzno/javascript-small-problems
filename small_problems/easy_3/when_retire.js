const READLINE_SYNC = require('readline-sync');

let age = Number(READLINE_SYNC.question('What is your age? '));
let retirmentAge = Number(READLINE_SYNC.question('At what age would you like to retire? '));

let year = new Date().getFullYear();
let retirmentYear = year + (retirmentAge - age);
let yearsUntilRetirement = (retirmentYear - year);

console.log(`It's ${year}. You will retire in ${retirmentYear}.`);
console.log(`You have only ${yearsUntilRetirement} years of work to go!`);
