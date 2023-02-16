const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2); // ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo']

/*
Array2 remains unchanged.

With the first for loop, we append each element in the array1 array to the array2 array. These elements
are all strings which are primitive values and thus immutable

With the second for loop, we iterate through array1. If the element at the current index starts with the characte
'C', we re-assign that index to the return value of calling `toUpperCase()` on that element. Since strings are
immutable, this action returns a new string and thus we re-assign that index to a new string.

Since strings are immutable, this has no effect on the strings in the array2 array, and thus when we
log the value of array2 to the screen on line 14, ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo']
is output.
*/
