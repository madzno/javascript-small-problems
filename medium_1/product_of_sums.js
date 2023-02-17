function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

/*
The code above will not produce the expected result because we do not return anything from the total function and thus the function
implicitly returns undefined instead of the sum like we want. We can fix this by adding a return statement on line 13 that returns the
value of sum.

Additionally, sum is not assigned an initial value on line 7 and thus it has a value of undefined by default. Therefore, at
the end of each iteration of the loop, sum is assigned a value of `NaN because the expression undefined + numbers[i] evaluates to
NaN.
*/
