/*
Input = no argument
output =
1. if a number is a multiple of 3 OR 5, logs to the console
2. if a number is a multiple of 3 AND 5, logs with an ! at the end
3. if a number isn't a multiple, it does nothing

*/

// function multiplesOfThreeAndFive() {
//   for (let num = 1; num <= 100; num += 1) {
//     if ((num % 3 === 0) && (num % 5 === 0)) {
//       console.log(String(num) + '!');
//     } else if ((num % 3 === 0) || (num % 5 === 0)) {
//       console.log(String(num));
//     }
//   }
// }

// multiplesOfThreeAndFive();

function multiplesOfThreeAndFive(startingNum, endingNum) {
  for (let num = startingNum; num <= endingNum; num += 1) {
    if ((num % 3 === 0) && (num % 5 === 0)) {
      console.log(String(num) + '!');
    } else if ((num % 3 === 0) || (num % 5 === 0)) {
      console.log(String(num));
    }
  }
}

multiplesOfThreeAndFive(1, 50);
