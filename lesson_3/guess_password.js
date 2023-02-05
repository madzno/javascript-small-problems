let rlSync = require('readline-sync');
const PASSWORD = 'password';

function guessPassword() {
  let attempts = 1;

  do {
    let input = rlSync.question("What's the password: ");

    if (input === PASSWORD) {
      console.log('You have successfully loged in.');
      break;
    } else if (attempts === 3) {
      console.log('You have been denied access.');
      break;
    }

    attempts += 1;
  } while (attempts <= 3)

}

guessPassword();
