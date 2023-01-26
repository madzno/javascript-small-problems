let bob = { name: 'Bob', age: 22 };
let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(studentBob.name); // Bob
console.log(bob.year); // undefined
console.log(studentBob.year); // Senior
