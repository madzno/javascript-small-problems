// function logEvens() {
//   for (let num = 2; num <= 99; num += 2) {
//     console.log(num);
//   }
// }

function logEvens() {
  for (let num = 1; num <= 99; num += 1) {
    if (num % 2 === 0) {
      console.log(num);
    }
  }
}

logEvens();
