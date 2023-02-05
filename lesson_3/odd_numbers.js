/*
Input - a positive integer
output - log all the odd numbers from
1 to the passed in number (including it)

Algorithm
1. define a funciton logOddNumbers with one argument ending_num
2. define a for loop
3. setting initial state - initialize a varaible starting_num to 1
4. evaluating a condition - condition to be met is when we are greater than
the input num (argument ending_num)
5. making some type of change - add 2 to starting_num
6. logging the current value of staring_num to the screen

*/

function logOddNumbers(endingNum) {
  for (let num = 1; num <= endingNum; num += 2) {
    console.log(num);
  }
}

// function logOddNumbers(ending_num) {
//   for (let num = 1; num <= ending_num; num += 1) {
//     if (num % 2 === 0) {
//       continue;
//     } else {
//       console.log(num);
//     }
//   }
// }


logOddNumbers(19);
// logOddNumbers(20);
// logOddNumbers(25);
