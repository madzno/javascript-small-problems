// function logOdds() {
//   for (let num = 1; num <= 99; num += 1) {
//     if (num % 2 === 1) {
//       console.log(num);
//     }
//   }
// }

// function logOdds() {
//   for (let num = 1; num <= 99; num += 2) {
//     console.log(num)
//   }
// }

// function logOdds() {
//   let num = 1;
//   while (num <= 99) {
//     console.log(num);
//     num += 2;
//   }
// }

function logOdds(starting, ending) {
  for (let num = starting; num <= ending; num += 1) {
    if (num % 2 === 1) {
      console.log(num);
    }
  }
};

logOdds(10, 50);
