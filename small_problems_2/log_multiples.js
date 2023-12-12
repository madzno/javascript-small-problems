/*
Input = an integer between 0 and 100
Ouptut = log all multiples of the
argument between 0 and 100 (inclusive) that
are ALSO odd, log them in descending order (strings)

Algoirthm
1. initialize a for loop
2. initialize starting condition to 100
3. continue looping while starting condition is greater than or
equal to 0
4. decrement the condition by 1
5. if the current number is a multiple of the argument number (meaning
that when you divide the current num by the input num, the remainder is 0),
AND is odd, meaning that when you divide by 2 the remainder is 1,
then log the string version of that number to the screen

*/

// function logMultiples(number) {
//   for (let currentNum = 100; currentNum >= 0; currentNum -= 1) {
//     if ((currentNum % number === 0) && (currentNum % 2 === 1)) {
//       console.log(String(currentNum));
//     }
//   }
// }


/*
Further exploration

Algorithm
1. set starting condition of for loop as number's largest multiple between
0 and 100, Math.floor(100 / number) * number
2. stop looping when the current number is less than the input number
3. decreement by the value of number
4. output each number to the screen (it is a multiple)

*/

function logMultiples(number) {
  for (let currentNum = Math.floor(100 / number) * number;
    currentNum >= number; currentNum -= number) {

    if (currentNum % 2 === 1) {
      console.log(currentNum);
    }
  }
}


logMultiples(17);
// output (5x, 3x and 1x)
85
51
17

logMultiples(21);
// output (3x and 1x)
63
21
