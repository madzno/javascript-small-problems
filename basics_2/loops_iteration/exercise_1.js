let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age?\n'));

for (let counter = 0; counter <= 40; counter += 10) {
  if (counter === 0) {
    console.log(`You are ${age} years old.`);
  } else {
    console.log(`In ${counter} years, you will be ${age + counter} years old.`);
  }
}



