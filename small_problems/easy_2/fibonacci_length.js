/*
Input = a number
Output = a number

Rules
1. Input will be a number that represents a number of digits
2. OUtput will be a number that represents the index at which
we first see that number of digits
3. the first fibonacci number has an index of 1
4. the fibonacci sequence is a sequence in which the first two numbers
are 1, and then each subsequent number is the sum of the two previous
numbers

Algorithm
1. define a funciton findFibonacciIndexByLength that takes a single argment,
digits
2. First, build out the fibonacci sequence until you have a number with
that number of digits
3. declare a variable fibonacciArray to an array with two string digits '1' and '1'
4. declare a variable index to 2
5. initialize a while loop with a condition - true
6. declare a variable results that is equal to converting the element at index - 1 and
the element at index - 2 to numbers, adding them, and then converting that back to a string
7. append results to the end of the fibonacciArray
8. if the length of results is equal to the input digits, break out of the loop
9. return the value of the length of the fibonacciArray
*/

// function findFibonacciIndexByLength(digits) {
//   let fibonacciArray = ['1', '1'];
//   let index = 2;

//   while (true) {
//     let results = String(Number(fibonacciArray[index - 1]) + Number(fibonacciArray[index - 2]));
//     fibonacciArray.push(results);

//     if (results.length === digits) {
//       break;
//     }

//     index += 1;
//   }

//   return fibonacciArray.length;
// }

function findFibonacciIndexByLength(digits) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < digits);

  return count;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run
