const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', { firstName: 'Groucho', lastName: 'Zeppo' }];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

array1[6].firstName = 'groucho';

console.log(array1);
console.log(array2);
