/*
Input = an integer
Output = a pattern of numbers and asterixes (a string)

Rules
1. input number will be between 1 and 10
2. pattern is a count of integers from 1 to the input integer
plus * for any placeholders

Algorithm
1. define a function generatePattern that takes an integer argument, nstars
2. initialize a variable, lineNumber to 1
3. count up from 1 to line number and concatenate the numbers to the output string
4. subtract the lineNumber from the nstars input number and thats the number
of stars to concatenate to the output string
5. log the output string
*/

function generatePattern(nStars) {

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    let outputString = '';

    for (let counter = 1; counter <= lineNumber; counter += 1) {
      outputString += String(counter)
    }

    for (let starsCount = lineNumber + 1; starsCount <= nStars; starsCount += 1) {
      outputString += '*';
    }
    console.log(outputString);
  }
}


generatePattern(7);

