/*
Input = an integer
Output = a string that represents that integer's century

Rules
1. Centuries begin in years that end in 01
2000 - 20th
2001 - 21st
1965 - 20th
256 - 3rd
5 - 1st
10103 - 102nd
1052 - 11th
1127 -12th
111201 - 113th

For centuries, number of digits matter and what the digits start with matter
Years that are 1-2 digits, are in the 1st century
for 3 digits, the 1st digit matters and the number of the centery is 1 plus the 1st digit
for 4 digits, 1st and 2nd digit matters and the number of the century is 1 plus the number that the
first and second digits combine make
for 5 digits, the 1st, 2nd, 3rd digit matters and the number of the century is 1 plus the number
that the first, second, and third digits combined make

for years that end in 2 or more 0's, the century is the value of the 1, 2, or 3 digits


Algorithm
1. Guard clause if the number provided is less than or equal to 100, return '1st'

Part I - get the centuryNumber - helper method determineCenturyNumber
2. Convert the input number to a string and initilaize it to centuryString
3. initialize a variable startingDigits to the return value of the length of the Centurystring minus 2 (this
is the number of starting digits that determine the century)
4. initalize a variable centuryNumber to the return value of calling slice on the centuryString and passing
an index of 0 and length of the centuryDigits
5. if the centuryString ends with two zeros '00' then we return the centuryNumber as is
6. if the centuryString ends with anything else then we convert centuryNumber to a Number, add 1, and then convert
it back to a string


Part II - determine suffix -
1. 0, 4, 5, 6, 7, 8, 9 - th
2. 1 - st
3. 2 - nd
4. 3- rd
5. 11 - 19 - th

1. define a funciton determineSuffix that takes the centuryString as an argument
2. if the last two characters of the centuryString are 11, 12, 13, 14, 15, 16, 17, 18, 19 - return 'th'
3. if the last digits is 0, 4, 5, 6, 7, 8, 9, - return 'th'
4. if the last digit is 1 - return 'st'
5. if the last digit is 2 - return 'nd'
6. if the last digit is 3 - return 'rd'
*/

function determineCenturyPrefix(year) {
  let yearString = String(year);
  let yearPrefixDigits = yearString.length - 2;
  let centuryDigits = yearString.slice(0, yearPrefixDigits);

  let centuryPrefix;
  if (yearString.endsWith('00')) {
    centuryPrefix = centuryDigits;
  } else {
    centuryPrefix = String(Number(centuryDigits) + 1);
  }

  return centuryPrefix;
}

function determineCenturySuffix(centuryPrefix) {
  let lastTwoDigits = Number(centuryPrefix[centuryPrefix.length - 2] + centuryPrefix[centuryPrefix.length - 1]);
  let lastDigit = Number(centuryPrefix[centuryPrefix.length - 1]);

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return 'th';
  } else if (lastDigit === 0 || lastDigit === 4 || (lastDigit >= 5 && lastDigit <= 9)) {
    return 'th';
  } else if (lastDigit === 1) {
    return 'st';
  } else if (lastDigit === 2) {
    return 'nd';
  } else if (lastDigit === 3) {
    return 'rd';
  }

}

function century(year) {
  if (year <= 100) return '1st';
  let centuryPrefix = determineCenturyPrefix(year);
  let centurySuffix = determineCenturySuffix(centuryPrefix);

  return centuryPrefix + centurySuffix;
}


console.log(century(2000) === "20th");
console.log(century(2001) === "21st");
console.log(century(1965) === "20th");
console.log(century(256) === "3rd");
console.log(century(5) === "1st")
console.log(century(10103) === "102nd");
console.log(century(1052) === "11th");
console.log(century(1127) === "12th");
console.log(century(11201) === "113th");

