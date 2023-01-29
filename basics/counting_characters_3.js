let rlySnc = require('readline-sync');
let string = rlySnc.question('Please enter a phrase: ')
let onlyAlphabeticCharCount = string.replace(/[^a-zA-Z]/g, '').length;

console.log(`There are ${onlyAlphabeticCharCount} aplabetic characters in ${string}.`);
