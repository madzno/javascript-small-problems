/*
Input = a string
Output = an encoded string

Rules
1. Change the character 13 positions later in the alphabet
2. preserve case
3. Don't modify characters that are not alphabetical

[a, b, c, d, e, f, g, h, i, j, k, l, m]
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,

[n, o, p, q, r, s, t, u, v, w, x, y, z]
13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
Algorithm
1. define a constant, ROTATION to 13
2. Initilaize an empty string resultstring
3. iterate through the input stirng, if the string is upper case A-M or
lower case a-m , find the ascii number of it and add 13 to that number,
return the character at that number and add it to result string
4. If the string is uppercase N-Z or lowercase n-z, find the ascii number
of it and subtract 13 from that number, return the character at that number
and add it to the result string
5. if the character doesn't match either, leave as is and add to result string
*/

function rot13(string) {
  const ROTATION_AMOUNT = 13;

  let resultString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index].match(/[a-m]/) || string[index].match(/[A-M]/)) {
      let asciiCode = string.charCodeAt(index);
      asciiCode += ROTATION_AMOUNT;
      resultString += String.fromCharCode(asciiCode);
    } else if (string[index].match(/[n-z]/) || string[index].match(/[N-Z]/)) {
      let asciiCode = string.charCodeAt(index);
      asciiCode -= ROTATION_AMOUNT;
      resultString += String.fromCharCode(asciiCode);
    } else {
      resultString += string[index];
    }
  }

  return resultString;
}


console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
