const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) { // evaluates to true threefore 'Hello' is logged
  console.log('Hello');
}

if (!myString) { // evaluates to false therefore line 11 not loged
  console.log('World');
}

if (!!myArray) { // evaluates to true therefore line 15 is logged
  console.log('World');
}

if (myOtherString || myArray) { // evaluates to true therefore ! is logged
  console.log('!');
}
