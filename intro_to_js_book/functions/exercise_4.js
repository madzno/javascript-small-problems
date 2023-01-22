function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

// this code returns nothing to the console because the `return` keyword on line 3 stops the execution
// of the funciton so the console.log on line 4 is never executed.
