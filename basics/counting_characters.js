let rlySync = require('readline-sync');
let string = rlySync.question('Please enter a phrase: ');
console.log(`There are ${string.length} characters in "${string}".`)
