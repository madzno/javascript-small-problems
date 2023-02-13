let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// alternative 1:
// myOtherArray = MyArray.slice();

// alternative 2:
// let myOtherArray = [];
// for (let index = 0; index < myArray.length; index += 1) {
//   myOtherArray.push(MyArray[index]);
// }
