function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log('even');
  } else if (!(Number.isInteger(num))) {
    console.log('error: number is not an integer');
  } else {
    console.log('odd');
  }
}

evenOrOdd(10);
evenOrOdd(5);
evenOrOdd(NaN);
