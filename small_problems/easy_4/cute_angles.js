/*
Input = a floating point number (integer, decimal, anything) that
represents an angle between 0 and 360 degrees
Output = a string in degrees, minutes, and seconds that represents
the angle in those units

Rules
1. the input number will be any integer or decimal number between 0 and 360
2. DEGREES (*)
- The whole number
3. MINUTES (')
- decimal portion (i.e .73 * 60) = minutes
4. SECONDS ('')
- decimal portion (i.e .73 * 60 = 43.8, .8 * 60 = 48)

Algorithm
1. Define constants DEGREES_SYMBOL = '*', MINUTES_SYMBOL = "'", SECONDS_SYMBOL = '"', MINUTES_IN_DEGREES = 60, SECONDS_IN_MINUTES = 60
1. Define a function dms that takes a number as an argument
2. Pass number to Math.floor to round down to the nearest degree, store the result in a variable degrees
3. Subtract degrees from number and store the result in a variable minutesAndSeconds
4. If minutesAndSeconds is 0, return the string `degrees*00'00''`
5. Multiply minutesAndSecond by 60 and round this result down using Math.floor, store the result in a variable minutes
6. Subtract minutes from minutesAndSeconds and store the result in a variable SecondsDecimal
7. Multiply SecondsDecimal by 60 and round it (using just Math.round) to the nearest integer, store the result in a variable seconds
8. Return a string 'degrees + '*' + mintues + "'" + seconds '""
*/

const DEGREES_SYMBOL = '*';
const MINUTES_SYMBOL = "'";
const SECONDS_SYMBOL = '"';
const MINUTES_IN_DEGREES = 60;
const SECONDS_IN_MINUTES = 60;

function formatMinutesSeconds(minutes, seconds) {
  if (String(minutes).length === 1) {
    minutes = '0' + minutes;
  } else if (String(seconds).length === 1) {
    seconds = '0' + seconds;
  }

  return minutes + MINUTES_SYMBOL + seconds + SECONDS_SYMBOL
}

function dms(number) {
  let degrees = Math.floor(number);
  let minutesAndSeconds = number - degrees;
  if (minutesAndSeconds === 0) {
    return degrees + DEGREES_SYMBOL + '00' + MINUTES_SYMBOL + '00' + SECONDS_SYMBOL;
  }

  let minutes = Math.floor(minutesAndSeconds * 60);
  let secondsDecimal = (minutesAndSeconds * 60) - minutes;
  let seconds = Math.round(secondsDecimal * 60);

  return degrees + DEGREES_SYMBOL + formatMinutesSeconds(minutes, seconds);
}



console.log(dms(30));           // 30*00'00"
console.log(dms(76.73));        // 76*43'48"
console.log(dms(254.6));        // 254*35'59"
console.log(dms(93.034773));    // 93*02'05"
console.log(dms(0));            // 0*00'00"
console.log(dms(360));          // 360*00'00" or 0°00'00"
