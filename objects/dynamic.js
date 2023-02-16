const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456'; // prop2: '456'
myObject[prop2] = '678'; // '456': '678'

console.log(myObject[prop2]); // '678'
console.log(myObject.prop2); // '456'

/*
The above logs '678' and '456' to the console.

On line 7 we declare a constant `prop2` and initialize it to the string '456'.

On line 8 we re-assign the value of the 'prop2' key of the `myObject` object to the string '456.

On line 9 we add a new property to `myObject` with the name '456' and  value '678'. The value of
the `prop2` variable is '456', since there is no key '456' in the myObject object, this line adds the new property.

On line 11 we use bracket notation to access the value of the key `456`. When we use a variable operand with bracket notation,
JavaScript uses the value of that variable to look up the associated key in `myObject`. In this case, the value of the
key `456` is `678` thus this is what is logged to the screen.

on line 12 we use dot notation to access the value of the `prop2` property in `myObject` this returns the value of
prop2, which was re-assigned to `'456'` on line 8, and thus this logs `'456'` to the screen
*/
