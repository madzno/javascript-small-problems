/*
1. initialize a variable numberOfScores to 1
2. initialize a variable totalScore to 0
3. initialize a while loop that iterates untile numberOfScores is greater than 3
4. ask a question to the user 'Enter score ${numberOfScore}' and record their
input as currentScore, make sure to convert the input to a number
5. add currentScore to the totalScore variable
6. add 1 to numberOfScores
8. After the loop is done iterating, divide totalScore by 3
9. Compare that score to the ranges for A, B, C, D, F - initilize a
variable letterGrade to the return value of a switch statement
10. Return the output "Based on the average of your3 scores your letter grade is ${letterGrade} "

*/

let rlSync = require('readline-sync');

function determineAverageScore(numberOfScores) {
  let counter = 1;
  let totalScore = 0;

  while (counter <= numberOfScores) {
    let currentScore = rlSync.question(`Enter score ${counter}: `);
    totalScore += Number(currentScore)
    counter += 1
  }

  return totalScore / numberOfScores;
}

function determineLetterGrade(scores) {
  let averageScore = determineAverageScore(scores);

  let letterGrade;
  if (averageScore >= 90) {
    letterGrade = 'A';
  } else if (averageScore >= 70 && averageScore < 90) {
    letterGrade = 'B';
  } else if (averageScore >= 50 && averageScore < 70) {
    letterGrade = 'C';
  } else {
    grade = 'F';
  }


  console.log(`Based on the average of your ${scores} scores your\
letter grade is ${letterGrade}`);
}

determineLetterGrade(5);
