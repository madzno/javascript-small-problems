// let myName = 'Bob';
// const saveName = myName;
// myName = 'Alice';
// console.log(myName, saveName);

// Alice Bob

const myName = 'Bob';
const saveName = myName;

myName.toUpperCase();

console.log(myName, saveName);
// Bob Bob, strings are primitve values and therefore immutable, `toUpperCase()` returns
// a new string BOB but this isn't stored in any variable, therefore `console.log(myName, saveName);`
// logs `Bob Bob` 
