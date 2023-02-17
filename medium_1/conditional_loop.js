let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

/*
This code will not reproduce the expected result. This code will result in an infinate loop because `i` is never incrememnted.

On line 1 i is declared and initialized to 0

The while loop begins and the while condition is true since 0 is less than 10

On line 3 the condition 0 % 3 === 0 returns true, thus the code that follows the `if` condition is executed, and this logs the current
value of `i`, 0 to the screen. The else clause is **never executed** and thus `i` is never incremented by 1, this means that the value
of i remains at 0 and the while loop will never terminate since 0 is less than 10.
*/
