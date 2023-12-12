let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

/*
Input = an object and an optional array
Output = an object

Explicit rules
 - if no second argument is passed, make a copy of *all* keys in the input object
 - do not mutate the origional object passed as the first argument

Algorithm
- define a function copyObj that takes two arguments, an Object and an array of keys
- define the second argument as optional, i.e give it a default value of all of the input
object's keys
- initialize an empty object objCopy
- iterate through the second argument array for each element, add the key and key's value
- to objCopy objCopy[key] = ObjTocopy[key]
- return objCopy
*/

function copyObj(objToCopy, keysArray = Object.keys(objToCopy)) {
  let objCopy = {};
  keysArray.forEach(function (key) {
    objCopy[key] = objToCopy[key]
  });
  return objCopy
}


let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, ['foo', 'qux']);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, ['bar']);
console.log(newObj3);       // => { bar: 2 }
