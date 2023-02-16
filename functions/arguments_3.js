let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

/*
The following code will log [1, 2, 10] to the console.

On line 1 we declare a variable a and initailize it to an array `[1, 2, 3]`. On line 7 we invoke the `myValue` function and
pass the array referenced by `a` as an argument. When we pass a compound object type such as an array to a function, a reference
to that array is passed. Thus the myValue function local variable `b` is initialized to the same array that `a` references.

On line 4 inside the `myValue` function body, we increment the integer 3 at index 2 of the b array by 7 and re-assign index 2
to the the new integer, 10. This action modifies the contents of the array referenced by b and in turn the array referenced by a
since they are the same array.

Thus on line 8 when we log the value of a to the console, the array [1, 2, 10] is returned.

*/
