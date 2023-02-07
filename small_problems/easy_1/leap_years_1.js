/*
Input = an integer greater than 0
Ouptu = true or false

Rules
1. output true if leap year and false if not
Rules to be a leap year
1. Must be divisble by 4
2. Not divisble by 4 => return false
1. If yes divisble by 4 and NOT divisble by 100 => return true
2. If yes divisble by 4, YES divisible by 100, YES divisible by 400 => return true
3. If yes divisble by 4, YES divisble by 100, NO divisble by 400 => return false
*/

function isLeapYear(year) {
  if (year % 4 === 1) {
    return false;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}


console.log(isLeapYear(2016));      // true **
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true **
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true
