for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// This code doesn't produce an error since all 3 components of the for loop
// are optional. Since we are still incrementing i by 1, the conditional i < 5
// eventually becomes false and thus this code doesn't result in an infinite loop.
