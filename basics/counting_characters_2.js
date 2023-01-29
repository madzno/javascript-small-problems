let rlySync = require('readline-sync');
let string = rlySync.question('Please enter a phrase: ');
let noSpacesString = string.replace(/\s/g, '');

console.log(`There are ${noSpacesString.length} non-space characters in "${string}".`);
