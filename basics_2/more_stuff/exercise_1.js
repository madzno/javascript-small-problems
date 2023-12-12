let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// [1, 4, 3] because array1 and array2 point to the same array. When we write
// array1[1] = 4 this mutates the array that both array1 and array2 point to,
// which now is [1, 4, 3]
