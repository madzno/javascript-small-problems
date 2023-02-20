const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

/*
This code currently outputs false becuase in order for two objects to be considered equal, they must have the *same* identity (be the same
object in memory). In this example, we declare and initialize a constant person to a object `{name: 'Victor'}` and then declare and initialize
a constant `otherPerson` to an object `{name: 'Victor'}`. Even though these two objects have the same value they represent two distinct
pieces of memory, therefore `===` returns false when they are compared.

In order to fix this, we would need to assign otherPerson to the *same object* as person:
*/

const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);
